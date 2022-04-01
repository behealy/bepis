import SanityClient, { SanityDocument } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import "dotenv/config";

const { SANITY_PROJECT_ID, SANITY_DATASET } = process.env;

class SanityDataSource {
	private sanityClient = SanityClient({
		projectId: SANITY_PROJECT_ID,
		dataset: SANITY_DATASET,
	});

	private readonly DOC_TYPE = "bepis-artwork"

	private imgBuilder = imageUrlBuilder(this.sanityClient)

	private artworkSlugs = [];
	private artworksBySlug = {};

	private awPromise = this.sq<SanityBepisArtwork[]>(`*[_type == '${this.DOC_TYPE}']{
		...,
		"_slug": slug.current
	}`);

	constructor() {
		this.initArtworks()
	}

	private async initArtworks(): Promise<string[]> {
		const res = await this.awPromise
		let s = this.artworkSlugs = res.map(a => {
			this.artworksBySlug[`${a._type}/${a._slug}`] = a;
			return a._slug;
		})
		return s;
	}

	private sq<R>(q: string): Promise<R> { return this.sanityClient.fetch<R>(q); }

	private sanityToDisplay(a: SanityBepisArtwork): DisplayArtwork {
		return {
			_id: a._id,
			_slug: a._slug,
			title: a.title,
			preview: this.imgBuilder.image(a.thumbs[0]).width(400).height(400).url(),
			previewSmall: this.imgBuilder.image(a.thumbs[0]).width(200).height(200).url(),
			mainImage:  this.imgBuilder.image(a.mainImages[0]).url(),
		}
	}

    async getArtworks(): Promise<DisplayArtwork[]> {
		await this.initArtworks();
		console.log(this.artworksBySlug);
		return this.artworkSlugs.map(slug => {
			return this.sanityToDisplay(this.getSArtBySlug(slug))
		})
    }

	async getArtworkSlugs(): Promise<string[]> {
		return this.initArtworks()
	}

	async getArtworkBySlug(slug: string): Promise<DisplayArtwork> {
		await this.initArtworks();
		return this.sanityToDisplay(this.getSArtBySlug(slug));
	}

	// Get sanity artwork object by slug
	private getSArtBySlug(slug: string): SanityBepisArtwork {
		return this.artworksBySlug[`${this.DOC_TYPE}/${slug}`];
	}
}

export const bepisArtworkDatasource = new SanityDataSource()

interface SanityBepisArtwork extends SanityDocument {
	mainImages: any[];
	thumbs: any[];
}

export interface DisplayArtwork {
	_id: string,
	_slug: string,
	title: string,
	preview: string,
	previewSmall: string,
	mainImage: string
}
import SanityClient from "@sanity/client";
import "dotenv/config";

const { SANITY_PROJECT_ID, SANITY_DATASET } = process.env;

class SanityDataSource implements ArtwebDataSource {

	private sanityClient = SanityClient({
		projectId: SANITY_PROJECT_ID,
		dataset: SANITY_DATASET,
	});

    async getArtworks() {
		const res = await this.sanityClient.fetch<>("*[_type == 'bepis-artwork']");

		
	
    }
    
    
}

interface ArtwebDataSource {
    getArtworks(): Promise<any>;
}

interface SanityImage {
	asset: {
		
	}
}

interface Artwork {
	_id: string;
	_createdAt: string;
	mainImages: 
}

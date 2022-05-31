function splitClasses(classes: string, styles: Map<string, string>) {
    let cl: string[];
    if (classes.indexOf(".") !== -1) {
        cl = classes.split(".");
    } else if (classes.indexOf(" ") !== -1) {
        cl = classes.split(" ");
    } else {
        return styles[classes];
    }
    return cl.reduce((p, c) => `${p} ${styles[c]}`, '')
}

/**
 * 
 * @param styles 
 * @returns function
 * 
 * Usage: 
 * 
 * import styles from './someStyle.module.css'
 * import { classListBuilder } from '../lib/cssUtils'
 * 
 * const classes = classListBuilder(styles);
 * 
 *  <a
    href={ href }
    className = {
        classes({
            if: isSelected == true,
            then: 'someCssClass.selected',
            else: 'someCssClass',
        })
    }
>
    { children }
< /a>
 * 
 */
export function classListBuilder(styles: any) {
    return (args: {
        if: boolean,
        then: string,
        else: string
    }) => {
        if (args.if) {
            return splitClasses(args.then, styles);
        } else {
            return splitClasses(args.else, styles);
        }
    }
}
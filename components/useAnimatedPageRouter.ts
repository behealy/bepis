import { useRouter } from "next/router";
import {
    createContext,
    Reducer,
    useCallback,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { PageRouterContextValue } from "./PageRouterContext";

interface PageRouterState {
    showContent: boolean;
    nextPage: string | null;
}

interface ReduxAction<T = any, P = any> {
    type: T;
    payload: P;
}

enum PageRouterActionTypes {
    GOTO_NEW_PAGE,
    FADE_OUT_FINISHED,
}

export default (): PageRouterContextValue => {
    const router = useRouter();

    const [{ showContent, nextPage }, dispatch] = useReducer(
        (state: PageRouterState, action: any) => {
            if (action.type === PageRouterActionTypes.GOTO_NEW_PAGE) {
                return {
                    showContent: false,
                    nextPage: action.payload.nextPage,
                };
            } else if (
                action.type === PageRouterActionTypes.FADE_OUT_FINISHED
            ) {
                return {
                    showContent: true,
                    nextPage: null,
                };
            } else return state;
        },
        {
            showContent: true,
            nextPage: null,
        }
    );

    const clickLink = useCallback(
        (href) => {
            dispatch({
                type: PageRouterActionTypes.GOTO_NEW_PAGE,
                payload: { nextPage: href },
            });
        },
        [dispatch]
    );

    const onAnimationComplete = useCallback(async () => {        
        console.log(nextPage, showContent);
        if (nextPage !== null) {
            router.push(nextPage);
            dispatch({
                type: PageRouterActionTypes.FADE_OUT_FINISHED,
            });
        }
    }, [showContent, nextPage, dispatch]);

    return {
        showContent,
        clickLink,
        onAnimationComplete,
    };
};

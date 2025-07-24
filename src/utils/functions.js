import { scroller } from "react-scroll";

export const scrollTo = (id) => {
    scroller.scrollTo(id, {
        duration: 400,
    });
};

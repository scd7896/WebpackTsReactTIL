import * as React from "react";
import * as styles from './styles.scss';
const Calcul = () => {
    const style = styles as any;
    return <div className = {style.calculator}>이것은 계산기 디폴트이다</div>;
};

export default Calcul;

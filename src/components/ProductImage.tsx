import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: Props) => {
    const { product } = useContext(ProductContext);

    let imageToShow: string;

    if (img) imageToShow = img;
    else if (product.img) imageToShow = product.img;
    else imageToShow = noImg;

    return (
        <img className={`${styles.productImg} ${className}`} src={imageToShow} alt="" style={style} />
    )
}
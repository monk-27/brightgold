
import dynamic from 'next/dynamic';
import React from 'react'
const ProductComponent = dynamic(() => import('@/components/productcomp'), {
    ssr: false, // Disable SSR for this component
});

const ProductPage = () => {
    return (
        <div>
            <ProductComponent />
        </div>
    )
}

export default ProductPage

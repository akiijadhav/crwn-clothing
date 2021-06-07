import React from 'react';

import SHOP_DATA from './shop.data.js';
import '../../components/collection-preview/collection-preview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
const ShopPage = () => {

    const collections = SHOP_DATA;

    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;
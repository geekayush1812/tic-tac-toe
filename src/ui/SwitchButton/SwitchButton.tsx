import './switchButton.css';

import { SwitchButtonProps } from 'types/uiTypes';

import { Item } from './Item';

export const SwitchButton = ({selectedItem,onClickItem,dataItems}:SwitchButtonProps) => {
    return (
        <ul  className='switchButtonContainer'>
              {
                dataItems.map((data,index)=>{
                    return (
                        <Item 
                            key={index}
                            item={data} 
                            onClick={onClickItem}
                            selectedItem={selectedItem}>
                                {data}
                        </Item>
                    )
                })
              }
        </ul>
    )
}

import './switchButton.css';

import { SwitchButtonProps } from 'types/uiTypes';

import { Item } from './Item';

export const SwitchButton = ({selectedIndex,onClickItem,dataItems}:SwitchButtonProps) => {
    return (
        <ul  className='switchButtonContainer'>
              {
                  dataItems.map((data,index)=>{
                    return (
                        <Item 
                            key={index}
                            dataIndex={index} 
                            onClick={onClickItem} 
                            selectedIndex={selectedIndex}>
                                {data}
                        </Item>
                    )
                  })
              }
        </ul>
    )
}

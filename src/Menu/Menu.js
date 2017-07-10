import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import './Menu.css'
class Menu extends Component {

    constructor(props) {
        super(props);
        this.handleClick.bind(this);

        this.state = {
            itemIndex: 0,
            resourceIndex: 0
        }
    }

    handleClick(itemIndex, resourceIndex) {
        this.setState({
            itemIndex: itemIndex,
            resourceIndex: resourceIndex
        })

    }

    render(props) {
        console.log(this.state.itemIndex);
        return (
            <div className='Menu'>
                <Accordion allowMultiple={true}
                    cssClass='menu'
                    activeItems={this.state.itemIndex}
                >
                    {this.props.items.map((item, itemIndex) => {
                        return (
                            <AccordionItem title={item.name}
                                key={item.name}
                                expanded={this.state.itemIndex === itemIndex}
                            >
                                <ul>
                                    {item.resources.map((resource, resourceIndex) => {
                                        return (
                                            <li onClick={() => this.handleClick(itemIndex, resourceIndex)}
                                                key={itemIndex + '_' + resourceIndex}
                                                className={(this.state.resourceIndex === resourceIndex && this.state.itemIndex === itemIndex) && 'selected'}>
                                                {resource.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        );
    }
}

export default Menu;

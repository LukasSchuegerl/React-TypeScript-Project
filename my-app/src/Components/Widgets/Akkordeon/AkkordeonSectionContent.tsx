import React, {PureComponent} from 'react';

class AkkordeonSectionContent extends PureComponent<any, any> {

    public static getHTMLComponentFROMJSON(params) {
        const [item, index] = params;
        switch (item.nodeType) {
            case 'paragraph':
                return (
                    <p key={index}>
                        {item.content.map(
                            (innerItem, innerIndex) => (
                                AkkordeonSectionContent.getHTMLComponentFROMJSON([innerItem, innerIndex])
                            )
                        )}
                    </p>
                );
            case 'unordered-list':
                return (
                    <ul key={index}>
                        {item.content.map(
                            (innerItem, innerIndex) => (
                                AkkordeonSectionContent.getHTMLComponentFROMJSON([innerItem, innerIndex])
                            )
                        )}
                    </ul>
                );
            case 'list-item':
                return  (
                  <li key={index}>
                      {item.content.map(
                          (innerItem, innerIndex) => (
                              AkkordeonSectionContent.getHTMLComponentFROMJSON([innerItem, innerIndex])
                          )
                      )}
                  </li>
                );
            case 'heading-4':
                return (
                    <h4 key={index}>
                        {item.content.map(
                            (innerItem, innerIndex) => (
                                AkkordeonSectionContent.getHTMLComponentFROMJSON([innerItem, innerIndex])
                            )
                        )}
                    </h4>
                );
            case 'hyperlink':
                return (
                    <a href={item.data.uri}>
                        {item.content.map(
                            (innerItem, innerIndex) => (
                                AkkordeonSectionContent.getHTMLComponentFROMJSON([innerItem, innerIndex])
                            )
                        )}
                    </a>
                );
            case 'text':
                return (
                  item.value
                );
            default:
                return (
                    <span className={'errorHappendDontShowThis'}/>
                );
        }
    }

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                {
                    this.props.content.map(
                        (item, index) => (
                            AkkordeonSectionContent.getHTMLComponentFROMJSON([item, index])
                        )
                    )
                }
            </div>
        )
    }

}

export default AkkordeonSectionContent;
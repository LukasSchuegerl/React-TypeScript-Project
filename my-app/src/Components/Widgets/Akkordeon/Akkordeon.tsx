import React, {PureComponent} from "react";
import AkkordeonSection from "./AkkordeonSection";

class Akkordeon extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    public transformJSON() {
        const json = this.props.content;
        var content = {"sID": [],"titles": [], "sections": []};
        for (let i=0, si = 0; i<json.length; i++) {
            if(json[i].nodeType==="heading-3") {
                content.titles.push(json[i]);
                if(i!==0) {
                    si++;
                }
                content.sID.push(si);
                content.sections.push([]);
            } else {
                content.sections[si].push(json[i]);
            }
        }
        return content;
    }

    public render() {
        const vals = this.transformJSON();
        return (
            <div>
                {
                    vals.sID.map(
                        (item) => (
                            <AkkordeonSection key={item} title={vals.titles[item].content[0].value} content={vals.sections[item]}/>
                        )
                    )
                }
            </div>
        )
    }

}

export default Akkordeon;
import React, { Component } from "react";
import Card from "../card";
import styles from "../../App.module.css"
// turultei ajillah function turull yu ch baij bolno 
class State extends Component {
    state = {
        name: "enol state iin object name gedeg huwisagchtai ",
        zurag:"https://cdnp.cody.mn/spree/images/1707461/product/open-uri20230331-2434112-1o44gwp.",
        type: true,
        Number: 9999,
        null: null,
        arr: [
            {
                title:"rtrrrgfdrgf",
                des: "rghwdrewrdfc",
                img: "https://cdnp.cody.mn/spree/images/1707461/product/open-uri20230331-2434112-1o44gwp.",
                css: styles.box
            },
            {
                title:"rtrrrgfdrgf",
                des: "rghwdrewrdfc",
                img: "https://cdnp.cody.mn/spree/images/1707461/product/open-uri20230331-2434112-1o44gwp.",
            },
            {
                title:"rtrrrgfdrgf",
                des: "rghwdrewrdfc",
                img: "https://cdnp.cody.mn/spree/images/1707461/product/open-uri20230331-2434112-1o44gwp.",
                css: styles.box3
            },
        ]
    }
    render(){
        console.log(this.state)
        return(
            <div className={styles.grid}>
                {this.state.arr.map((props)=>{
                    return(
                        <Card
                           title={props.title}
                           des={props.des}
                           img={props.img}
                           style={props.css}
                        />
                    )
                })}
            </div>
        )
    }
}

export default State
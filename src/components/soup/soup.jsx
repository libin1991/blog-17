/* jshint esversion: 6 */
import React from 'react';
import '../self/self.scss';
import './soup.scss'

const soupList = [{
    context:'当你看清了一个人而不揭穿，你就懂得了原谅的意义;讨厌一个人而不翻脸，你就懂得了至极的尊重。'
},{
    context:'心灵很珍贵，如果有人给，一定当宝贝；时间很宝贵，如果有人陪，千万别浪费。一个人，只有一双眼，一颗心。'
},{
    context:'这个世界，真正对我们好的人不多：遇见了，不要错过；拥有了，拿命珍惜！'
},{
    context:'怀抱有时，不怀抱有时。寻找有时，失落有时。保守有时，舍弃有时。撕裂有时，缝补有时。静默有时，言语有时。喜爱有时，恨恶有时。争战有时，和好有时。我们不能改变过去，也不能预测未来，唯一能做的，只有把握现在。人生的幸运或不幸，都是在我们现在的每一个行动中形成的。'
},{
    context:'你不知道生活在什么时候就改变了方向，你被失望拖进了深渊，被疾病拉进坟墓，你被挫折践踏的体无完肤，在这之前，在这世界末日天翻地覆之前，让我陪在你的身边。'
}]
class Soup extends React.Component{
    render(){
        return(
            <div className='content'>
                <h1 className='title' style={{borderBottom:'1px solid'}}>心灵鸡汤</h1>
                <div>
                    
                        {soupList.map((item,index)=>(
                            <div key={index}className='soupLi'><p>{item.context}</p><div style={{backgroundImage:'url('+require(`./images/${index}.jpg`)+')'}}></div></div>
                        ))}
                    
                </div>
            </div>
        )
    }
}
export default Soup;
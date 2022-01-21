import React,{useState} from 'react';
import classNames from 'classnames';
import './App.css';

export default () => {
  const [activeKey,setActiveKey] = useState(0)
  const tabsData = ['商品信息', '配送信息', '商品详情'];
  const changeTabs = (key:number)=>{
    console.log('key',key);
    setActiveKey(key)
    const anchorId = `anchor${key}`
    let scrollElement = document.getElementById('content');    // 对应id的滚动容器
    let anchorElement = document.getElementById(anchorId);  // 需要定位看到的锚点元素
    if(anchorElement) {
      //方式1, 可以
      // anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
      //方式2, 可以
      window.scrollTo(0, anchorElement.offsetTop);
      //方式3, 按理可以,但是没效果
      // scrollElement.scrollTo({top: anchorElement.offsetTop, behavior: "smooth" });
    }
  }
  return (
    <div className='abtest-variable'>
      <div className='content'>
        <div className='title'>
          hello world111
        </div>
        <div className='tabs-warpper'>
          {tabsData.map((item, key) => (
            <div
              key={key}
              onClick={() => {
                changeTabs(key);
              }}
              className={classNames(
                'item',
                activeKey === key ? 'active' : null,
              )}
            >
              {item}
            </div>
          ))}
        </div>
        <div style={{ height: '600px' }} id="anchor0">
          <p>标题1</p>
          <p>aaaaa</p>
          <p>aaaaa</p>
          <p>aaaaa</p>
          <p>aaaaa</p>
          <p>aaaaa</p>
        </div>
        <div style={{ height: '600px' }} id="anchor1">
          <p>标题2</p>
          <p>bbbbbb</p>
          <p>bbbbbb</p>
          <p>bbbbbb</p>
          <p>bbbbbb</p>
          <p>bbbbbb</p>
        </div>
        <div style={{ height: '600px' }} id="anchor2">
          <p>标题3</p>
          <p>cccccc</p>
          <p>cccccc</p>
          <p>cccccc</p>
          <p>cccccc</p>
          <p>cccccc</p>
          <p>cccccc</p>
          <p>cccccc</p>
        </div>
        <div class="footer">
            底部内容
            底部内容
            底部内容
            底部内容
            底部内容
            底部内容
            底部内容
        </div>
      </div>
    </div>
  );
};
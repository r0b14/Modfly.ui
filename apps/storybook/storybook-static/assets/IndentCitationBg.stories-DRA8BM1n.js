import{L as R}from"./Layout-BwgvqtAe.js";const E=""+new URL("ImgBg1-DJr3tkEX.jpg",import.meta.url).href,w=""+new URL("ImgBg2-sJqs6o79.jpg",import.meta.url).href,v=""+new URL("img1-BAAJudNB.png",import.meta.url).href,I=""+new URL("img2-_ZI5suCR.png",import.meta.url).href,u=({children:p,backgroundColor:g="#BAE3F3",title:o,text:f,option:r="yellow"})=>{let n,e;r==="yellow"?(n=E,e=v):r==="pink"&&(n=w,e=I);const x={backgroundColor:g,backgroundImage:`url(${n})`,backgroundSize:"cover",backgroundPosition:"center"};return React.createElement("div",{className:"mb-10 py-5",style:x},React.createElement(R,null,React.createElement("span",{className:`w-full ${r==="yellow"?"text-[#333333]":"text-[#742B0B]"} mb-5`},o&&React.createElement("h4",null,o)),React.createElement("div",{className:"flex flex-row gap-5 max-md:gap-2 items-center w-full max-md:items-start"},e&&React.createElement("img",{className:"max-md:max-w-[80px] max-w-[100px]",src:e,alt:o||"Image"}),React.createElement("p",{className:"max-md:border-l-2 max-md:border-[#742B0B] max-md:pl-2"},f)),React.createElement("p",{className:"mt-5"},p)))};u.__docgenInfo={description:"",methods:[],displayName:"IndentCitationBg",props:{backgroundColor:{defaultValue:{value:'"#BAE3F3"',computed:!1},required:!1},option:{defaultValue:{value:'"yellow"',computed:!1},required:!1}}};const B={title:"Molecules/IndentCitation/IndentCitationBg",component:u,tags:["autodocs"]},a={args:{option:"yellow",title:"Destaque Importante",text:"A Justiça Restaurativa promove a cura e a reconciliação dentro da comunidade escolar.",children:"Referência: Manual de Justiça Restaurativa (2023)"}},t={args:{option:"pink",title:"Atenção ao Conteúdo",text:"Sempre considere os sentimentos de todas as partes envolvidas no processo de mediação.",children:"Dica Prática para Educadores",backgroundColor:"#F3E0E9"}};var s,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    option: 'yellow',
    title: 'Destaque Importante',
    text: 'A Justiça Restaurativa promove a cura e a reconciliação dentro da comunidade escolar.',
    children: 'Referência: Manual de Justiça Restaurativa (2023)'
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,i,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    option: 'pink',
    title: 'Atenção ao Conteúdo',
    text: 'Sempre considere os sentimentos de todas as partes envolvidas no processo de mediação.',
    children: 'Dica Prática para Educadores',
    backgroundColor: '#F3E0E9'
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const k=["Yellow","Pink"];export{t as Pink,a as Yellow,k as __namedExportsOrder,B as default};

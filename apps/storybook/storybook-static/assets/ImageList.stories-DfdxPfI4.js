import{r as u,R as e}from"./index-CIdkRTUq.js";import{I as x}from"./ImageFallback-ChHxVUsD.js";const c=({items:i})=>{const[d,m]=u.useState(new Set),p=a=>{m(o=>{const t=new Set(o);return t.has(a)?t.delete(a):t.add(a),t})};return e.createElement("div",{className:"w-full max-w-7xl mx-auto px-4"},i.map((a,o)=>{const t=d.has(o);return e.createElement("div",{key:o,className:"flex items-stretch"},e.createElement("div",{className:"flex flex-col items-center w-8"},e.createElement("div",{className:"w-2 flex-1 transition-all duration-300 ease-in-out",style:{backgroundColor:a.barColor}}),a.isLast&&e.createElement("div",{className:"w-8 h-8 rounded-full shrink-0",style:{backgroundColor:a.barColor}})),e.createElement("div",{className:"flex-1 pb-5",style:{maxWidth:"1080px"}},e.createElement("div",{className:"relative mb-3"},e.createElement(x,{src:a.imgSrc,fallback:a.imgFallback,maxWidth:"1080px"}),e.createElement("button",{onClick:()=>p(o),className:"absolute bottom-[-40px] left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",style:{backgroundColor:t?a.buttonColorActive:a.buttonColor,width:"78px",height:"78px"},"aria-label":t?"Recolher descrição":"Expandir descrição"},e.createElement("svg",{className:`w-10 h-10 text-[#F9F5C1] transform transition-all duration-300
                    }`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},t?e.createElement("path",{d:"M2 12h20",strokeWidth:5}):e.createElement("path",{d:"M2 12h20 M12 2v20",strokeWidth:5})))),e.createElement("p",{className:"text-base ml-10 mb-6",style:{fontSize:"16px"}},a.fonte),e.createElement("div",{className:`overflow-hidden transition-all duration-500 ease-in-out ${t?"max-h-[1080px] mb-10 opacity-100":"max-h-0 opacity-0"}`},e.createElement("div",{className:"p-6 rounded-lg",style:{backgroundColor:a.descriptionBoxColor}},e.createElement("p",{className:" leading-relaxed whitespace-pre-line"},a.descricao)))))}))};c.__docgenInfo={description:"",methods:[],displayName:"ImageList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ImageListItem"}],raw:"ImageListItem[]"},description:""}}};const b={title:"Molecules/ImageList",component:c,tags:["autodocs"]},r={args:{items:[{imgSrc:"https://via.placeholder.com/800x400",imgFallback:"https://via.placeholder.com/800x400",fonte:"Fonte: Google Imagens (2024)",descricao:"Esta é a descrição detalhada da primeira imagem. Ela aparece quando o botão de expandir é clicado.",barColor:"#3374C0",buttonColor:"#298BCA",descriptionBoxColor:"#ACCFD5"},{imgSrc:"https://via.placeholder.com/800x400/8FCD79",imgFallback:"https://via.placeholder.com/800x400/8FCD79",fonte:"Fonte: Acervo Próprio (2024)",descricao:"Segunda imagem com uma cor de barra diferente para demonstrar a flexibilidade do componente.",barColor:"#8FCD79",buttonColor:"#649753",descriptionBoxColor:"#BBD3B3",isLast:!0}]}};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      imgSrc: 'https://via.placeholder.com/800x400',
      imgFallback: 'https://via.placeholder.com/800x400',
      fonte: 'Fonte: Google Imagens (2024)',
      descricao: 'Esta é a descrição detalhada da primeira imagem. Ela aparece quando o botão de expandir é clicado.',
      barColor: '#3374C0',
      buttonColor: '#298BCA',
      descriptionBoxColor: '#ACCFD5'
    }, {
      imgSrc: 'https://via.placeholder.com/800x400/8FCD79',
      imgFallback: 'https://via.placeholder.com/800x400/8FCD79',
      fonte: 'Fonte: Acervo Próprio (2024)',
      descricao: 'Segunda imagem com uma cor de barra diferente para demonstrar a flexibilidade do componente.',
      barColor: '#8FCD79',
      buttonColor: '#649753',
      descriptionBoxColor: '#BBD3B3',
      isLast: true
    }]
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,b as default};

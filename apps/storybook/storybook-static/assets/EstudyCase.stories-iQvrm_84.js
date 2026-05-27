import{R as e}from"./index-CIdkRTUq.js";const s=({topBgImg:c,iconImg:n,title:l,bottomBgImg:d,bottomBgWidth:i,bottomBgHeight:m,children:u})=>e.createElement("div",{className:"w-full rounded-lg overflow-hidden"},e.createElement("div",{className:"relative h-[80px] md:h-[100px] flex items-center",style:{backgroundImage:`url(${c})`,backgroundSize:"cover",backgroundPosition:"center"}},e.createElement("img",{src:n,alt:"Ícone",className:"h-10 w-10 md:h-14 md:w-14 ml-6"}),e.createElement("h5",{className:"ml-4 text-branco text-lg md:text-2xl font-bold drop-shadow"},l)),e.createElement("div",{className:"relative p-6 md:p-10",style:{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center",width:i,height:m}},e.createElement("div",{className:"relative z-10 text-base md:text-lg text-[#2B2B2B]"},u),e.createElement("div",{className:"absolute inset-0 bg-white/70 z-0 rounded-b-lg"})));s.__docgenInfo={description:"",methods:[],displayName:"EstudyCase",props:{topBgImg:{required:!0,tsType:{name:"string"},description:""},iconImg:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},bottomBgImg:{required:!0,tsType:{name:"string"},description:""},bottomBgWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},bottomBgHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g={title:"Molecules/EstudyCase",component:s,tags:["autodocs"]},t={args:{title:"Estudo de Caso 1",topBgImg:"https://via.placeholder.com/1200x100/3374C0/FFFFFF?text=Top+Background",iconImg:"https://via.placeholder.com/100",bottomBgImg:"https://via.placeholder.com/1200x400/E1EFFF/000000?text=Bottom+Background",children:React.createElement("div",null,React.createElement("p",null,"Este é um exemplo de estudo de caso com conteúdo rico dentro."),React.createElement("ul",{className:"list-disc pl-5 mt-4"},React.createElement("li",null,"Fato 1 do caso"),React.createElement("li",null,"Fato 2 do caso")))}};var o,a,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Estudo de Caso 1',
    topBgImg: 'https://via.placeholder.com/1200x100/3374C0/FFFFFF?text=Top+Background',
    iconImg: 'https://via.placeholder.com/100',
    bottomBgImg: 'https://via.placeholder.com/1200x400/E1EFFF/000000?text=Bottom+Background',
    children: <div>\r
        <p>Este é um exemplo de estudo de caso com conteúdo rico dentro.</p>\r
        <ul className="list-disc pl-5 mt-4">\r
          <li>Fato 1 do caso</li>\r
          <li>Fato 2 do caso</li>\r
        </ul>\r
      </div>
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,g as default};

const n=({title:c,titleColor:E="#fff",hasTitle:i=!1,children:o,backgroundColor:t="#F3E0E9",borderColor:a="#F592C0",boxShadowColor:w="rgba(0,0,0,0.15)",imgSrc:r,imgSrc2:e,imgMaxWidth:s,isReverse:f,justifyText:p=!1})=>{const x=!t||/none/i.test(String(t))||/transparent/i.test(String(t)),h=!a||/none/i.test(String(a))||/transparent/i.test(String(a));return React.createElement("div",{className:"mb-10"},React.createElement("div",{className:`
          flex flex-col md:flex-row items-start md:items-center justify-center
          w-full max-w-[1200px] mx-auto p-5 gap-5
          rounded-[7px] md:h-[311px] h-auto

          ${e?"md:flex-row md:justify-between":f?"md:flex-row-reverse md:justify-around":"md:flex-row md:justify-around"}
        `,style:{...x?{}:{backgroundColor:t},...h?{border:"none"}:{border:`3px solid ${a}`}}},e&&React.createElement("img",{src:e,alt:"",style:{maxWidth:s||"100%",width:"100%",height:"auto",objectFit:"contain"}}),!e&&React.createElement("img",{src:r,alt:"",className:"w-full md:w-auto",style:{maxWidth:s||"100%",width:"100%",height:"auto",objectFit:"contain"}}),React.createElement("div",{className:e?"w-full px-5":"w-full md:w-[70%]"},i?React.createElement("header",null,React.createElement("h4",{className:"text-[#111] font-semibold"},c)):"",p?React.createElement("p",{className:"sm:mt-2.5 text-justify"},o):React.createElement("p",{className:"sm:mt-2.5 text-left"},o)),e?React.createElement("img",{src:r,alt:"",className:"w-full md:w-auto",style:{maxWidth:s||"100%",width:"100%",height:"auto",objectFit:"contain"}}):null))};n.__docgenInfo={description:"",methods:[],displayName:"TextWithImageBox",props:{titleColor:{defaultValue:{value:"'#fff'",computed:!1},required:!1},hasTitle:{defaultValue:{value:"false",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'#F3E0E9'",computed:!1},required:!1},borderColor:{defaultValue:{value:"'#F592C0'",computed:!1},required:!1},boxShadowColor:{defaultValue:{value:"'rgba(0,0,0,0.15)'",computed:!1},required:!1},justifyText:{defaultValue:{value:"false",computed:!1},required:!1}}};const g={title:"Templates/TextWithImageBox",component:n,tags:["autodocs"]},l={args:{children:"Este é um texto de exemplo que acompanha uma imagem dentro de um box estilizado.",imgSrc:"https://via.placeholder.com/300",isReverse:!1,hasTitle:!0,title:"Título do Box",backgroundColor:"#F3E0E9",borderColor:"#F592C0"}};var m,d,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Este é um texto de exemplo que acompanha uma imagem dentro de um box estilizado.',
    imgSrc: 'https://via.placeholder.com/300',
    isReverse: false,
    hasTitle: true,
    title: 'Título do Box',
    backgroundColor: '#F3E0E9',
    borderColor: '#F592C0'
  }
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const b=["Default"];export{l as Default,b as __namedExportsOrder,g as default};

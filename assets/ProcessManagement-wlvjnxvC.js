import{_ as P,h as w,j as i,k as e,w as a,r as d,o as y,l as r,t as f,F,m as x,p as L}from"./index-vfIZnvOm.js";const B={name:"ProcessManagement",data(){return{searchQuery:"",categoryFilter:"",processes:[{id:"P001",productName:"七子饼茶",category:"普洱茶",version:"v1.0",status:"已发布",updateTime:"2024-03-01 10:00:00",steps:[{name:"萎凋",requirements:"自然萎凋，控制环境温度和湿度",temperature:25,duration:120,qualityChecks:["外观","温度","湿度"]}],qualityStandards:[{item:"外观",standard:"条索紧结、色泽乌黑"},{item:"香气",standard:"陈香显露、纯正"}]}],dialogVisible:!1,stepsDialogVisible:!1,standardsDialogVisible:!1,dialogTitle:"",activeStep:0,currentSteps:[],currentStandards:[],processForm:{productName:"",category:"",steps:[],qualityStandards:[]},rules:{productName:[{required:!0,message:"请输入产品名称",trigger:"blur"}],category:[{required:!0,message:"请选择产品类别",trigger:"change"}]}}},computed:{filteredProcesses(){return this.processes.filter(s=>{const l=s.productName.toLowerCase().includes(this.searchQuery.toLowerCase()),_=!this.categoryFilter||s.category===this.categoryFilter;return l&&_})}},methods:{getStatusType(s){return{草稿:"info","已发���":"success",已停用:"danger"}[s]},handleAdd(){this.dialogTitle="新增工艺流程",this.processForm={productName:"",category:"",steps:[],qualityStandards:[]},this.dialogVisible=!0},handleEdit(s){this.dialogTitle="编辑工艺流程",this.processForm={...s},this.dialogVisible=!0},viewSteps(s){this.currentSteps=s.steps,this.stepsDialogVisible=!0},viewQualityStandards(s){this.currentStandards=s.qualityStandards,this.standardsDialogVisible=!0},addStep(){this.processForm.steps.push({name:"",requirements:"",temperature:25,duration:30,qualityChecks:[]})},removeStep(s){this.processForm.steps.splice(s,1)},addQualityStandard(){this.processForm.qualityStandards.push({item:"",standard:""})},removeQualityStandard(s){this.processForm.qualityStandards.splice(s,1)},handleSubmit(){this.$refs.processForm.validate(s=>{if(s){if(this.dialogTitle==="新增���艺流程")this.processes.push({id:"P"+(this.processes.length+1).toString().padStart(3,"0"),...this.processForm,version:"v1.0",status:"草稿",updateTime:new Date().toLocaleString()});else{const l=this.processes.findIndex(_=>_.id===this.processForm.id);this.processes[l]={...this.processForm,updateTime:new Date().toLocaleString()}}this.dialogVisible=!1,this.$message.success(this.dialogTitle+"成功")}})}}},M={class:"process-container"},z={class:"toolbar"},E={class:"step-header"},j={class:"step-description"};function A(s,l,_,I,o,p){const m=d("el-button"),b=d("el-input"),V=d("el-option"),h=d("el-select"),u=d("el-table-column"),U=d("el-tag"),S=d("el-table"),g=d("el-form-item"),C=d("el-input-number"),v=d("el-checkbox"),q=d("el-checkbox-group"),T=d("el-card"),N=d("el-form"),k=d("el-dialog"),D=d("el-step"),Q=d("el-steps");return y(),w("div",M,[i("div",z,[e(m,{type:"primary",onClick:p.handleAdd},{default:a(()=>l[8]||(l[8]=[r("新增工艺流程")])),_:1},8,["onClick"]),e(b,{modelValue:o.searchQuery,"onUpdate:modelValue":l[0]||(l[0]=t=>o.searchQuery=t),placeholder:"请输入产品名称搜索",style:{width:"200px","margin-left":"10px"}},null,8,["modelValue"]),e(h,{modelValue:o.categoryFilter,"onUpdate:modelValue":l[1]||(l[1]=t=>o.categoryFilter=t),placeholder:"产品类别",style:{"margin-left":"10px"}},{default:a(()=>[e(V,{label:"全部",value:""}),e(V,{label:"普洱茶",value:"普洱茶"}),e(V,{label:"红茶",value:"红茶"}),e(V,{label:"绿茶",value:"绿茶"})]),_:1},8,["modelValue"])]),e(S,{data:p.filteredProcesses,style:{width:"100%","margin-top":"20px"}},{default:a(()=>[e(u,{prop:"id",label:"工艺编号",width:"120"}),e(u,{prop:"productName",label:"产品名称",width:"150"}),e(u,{prop:"category",label:"产品类别",width:"120"}),e(u,{prop:"version",label:"版本",width:"100"}),e(u,{prop:"status",label:"状态",width:"100"},{default:a(t=>[e(U,{type:p.getStatusType(t.row.status)},{default:a(()=>[r(f(t.row.status),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"updateTime",label:"更新时间",width:"180"}),e(u,{label:"操作",width:"300"},{default:a(t=>[e(m,{size:"small",onClick:n=>p.handleEdit(t.row)},{default:a(()=>l[9]||(l[9]=[r("编辑")])),_:2},1032,["onClick"]),e(m,{size:"small",type:"success",onClick:n=>p.viewSteps(t.row)},{default:a(()=>l[10]||(l[10]=[r("工艺步骤")])),_:2},1032,["onClick"]),e(m,{size:"small",type:"warning",onClick:n=>p.viewQualityStandards(t.row)},{default:a(()=>l[11]||(l[11]=[r("质量标准")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(k,{title:o.dialogTitle,modelValue:o.dialogVisible,"onUpdate:modelValue":l[5]||(l[5]=t=>o.dialogVisible=t),width:"800px"},{footer:a(()=>[e(m,{onClick:l[4]||(l[4]=t=>o.dialogVisible=!1)},{default:a(()=>l[20]||(l[20]=[r("取消")])),_:1}),e(m,{type:"primary",onClick:p.handleSubmit},{default:a(()=>l[21]||(l[21]=[r("确定")])),_:1},8,["onClick"])]),default:a(()=>[e(N,{model:o.processForm,rules:o.rules,ref:"processForm","label-width":"100px"},{default:a(()=>[e(g,{label:"产品名称",prop:"productName"},{default:a(()=>[e(b,{modelValue:o.processForm.productName,"onUpdate:modelValue":l[2]||(l[2]=t=>o.processForm.productName=t)},null,8,["modelValue"])]),_:1}),e(g,{label:"产品类别",prop:"category"},{default:a(()=>[e(h,{modelValue:o.processForm.category,"onUpdate:modelValue":l[3]||(l[3]=t=>o.processForm.category=t)},{default:a(()=>[e(V,{label:"普洱茶",value:"普洱茶"}),e(V,{label:"红茶",value:"红茶"}),e(V,{label:"绿茶",value:"绿茶"})]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"工艺步骤"},{default:a(()=>[(y(!0),w(F,null,x(o.processForm.steps,(t,n)=>(y(),w("div",{key:n,class:"step-item"},[e(T,null,{header:a(()=>[i("div",E,[i("span",null,"步骤 "+f(n+1),1),e(m,{type:"danger",circle:"",icon:"el-icon-delete",onClick:c=>p.removeStep(n)},null,8,["onClick"])])]),default:a(()=>[e(g,{label:"步骤名称"},{default:a(()=>[e(b,{modelValue:t.name,"onUpdate:modelValue":c=>t.name=c},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(g,{label:"操作要求"},{default:a(()=>[e(b,{type:"textarea",modelValue:t.requirements,"onUpdate:modelValue":c=>t.requirements=c,rows:"3"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(g,{label:"温度要求"},{default:a(()=>[e(C,{modelValue:t.temperature,"onUpdate:modelValue":c=>t.temperature=c,min:0,max:100},null,8,["modelValue","onUpdate:modelValue"]),l[12]||(l[12]=i("span",{class:"unit"},"°C",-1))]),_:2},1024),e(g,{label:"时间要求"},{default:a(()=>[e(C,{modelValue:t.duration,"onUpdate:modelValue":c=>t.duration=c,min:0},null,8,["modelValue","onUpdate:modelValue"]),l[13]||(l[13]=i("span",{class:"unit"},"分钟",-1))]),_:2},1024),e(g,{label:"质量检查点"},{default:a(()=>[e(q,{modelValue:t.qualityChecks,"onUpdate:modelValue":c=>t.qualityChecks=c},{default:a(()=>[e(v,{label:"外观"},{default:a(()=>l[14]||(l[14]=[r("外观")])),_:1}),e(v,{label:"温度"},{default:a(()=>l[15]||(l[15]=[r("温度")])),_:1}),e(v,{label:"湿度"},{default:a(()=>l[16]||(l[16]=[r("湿度")])),_:1}),e(v,{label:"口感"},{default:a(()=>l[17]||(l[17]=[r("口感")])),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]))),128)),e(m,{type:"primary",onClick:p.addStep},{default:a(()=>l[18]||(l[18]=[r("添加步骤")])),_:1},8,["onClick"])]),_:1}),e(g,{label:"质量标准"},{default:a(()=>[e(S,{data:o.processForm.qualityStandards,border:""},{default:a(()=>[e(u,{prop:"item",label:"检查项目",width:"150"},{default:a(t=>[e(b,{modelValue:t.row.item,"onUpdate:modelValue":n=>t.row.item=n},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"standard",label:"标准要求"},{default:a(t=>[e(b,{modelValue:t.row.standard,"onUpdate:modelValue":n=>t.row.standard=n},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",width:"100"},{default:a(t=>[e(m,{type:"danger",circle:"",icon:"el-icon-delete",onClick:n=>p.removeQualityStandard(t.$index)},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),e(m,{type:"primary",onClick:p.addQualityStandard,style:{"margin-top":"10px"}},{default:a(()=>l[19]||(l[19]=[r(" 添加质量标准 ")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),e(k,{title:"工艺步骤详情",modelValue:o.stepsDialogVisible,"onUpdate:modelValue":l[6]||(l[6]=t=>o.stepsDialogVisible=t),width:"600px"},{default:a(()=>[e(Q,{active:o.activeStep,direction:"vertical"},{default:a(()=>[(y(!0),w(F,null,x(o.currentSteps,(t,n)=>(y(),L(D,{key:n,title:t.name},{description:a(()=>[i("div",j,[i("p",null,[l[22]||(l[22]=i("strong",null,"操作要求：",-1)),r(f(t.requirements),1)]),i("p",null,[l[23]||(l[23]=i("strong",null,"温度要求：",-1)),r(f(t.temperature)+"°C",1)]),i("p",null,[l[24]||(l[24]=i("strong",null,"时间要求：",-1)),r(f(t.duration)+"分钟",1)]),i("p",null,[l[25]||(l[25]=i("strong",null,"质量检查点：",-1)),r(f(t.qualityChecks.join("、")),1)])])]),_:2},1032,["title"]))),128))]),_:1},8,["active"])]),_:1},8,["modelValue"]),e(k,{title:"质量标准详情",modelValue:o.standardsDialogVisible,"onUpdate:modelValue":l[7]||(l[7]=t=>o.standardsDialogVisible=t),width:"600px"},{default:a(()=>[e(S,{data:o.currentStandards,border:""},{default:a(()=>[e(u,{prop:"item",label:"检查项目",width:"150"}),e(u,{prop:"standard",label:"标准要求"})]),_:1},8,["data"])]),_:1},8,["modelValue"])])}const H=P(B,[["render",A],["__scopeId","data-v-2a22218d"]]);export{H as default};

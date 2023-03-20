"use strict";(self.webpackChunkgestao_aeb=self.webpackChunkgestao_aeb||[]).push([[765],{765:(x,h,r)=>{r.r(h),r.d(h,{FeaturesModule:()=>c});var s=r(253),e=r(8274);const C=[{path:"meeting",loadChildren:()=>r.e(30).then(r.bind(r,1030)).then(l=>l.MeetingModule)}];let M=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[s.Bz.forChild(C),s.Bz]}),l})();var g=r(4125);let c=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[M,g.W]}),l})()},4125:(x,h,r)=>{r.d(h,{W:()=>X});var s=r(253),e=r(8274),C=r(1135),M=r(9646);let g=(()=>{class t{constructor(){this.locais=this.getLocais(),this.agendamentos=[],this.locaisComAgendamento=new C.X([])}addAgendamento(n){let o=0;this.agendamentos.push(n);for(const i of this.agendamentos)i.local?.id===n.local?.id&&o++;n.local.qtdAgendamentos=o,this.setLocaisComAgendamento()}setLocaisComAgendamento(){let n=[];this.agendamentos.forEach(o=>{n.push(o.local)}),this.locaisComAgendamento.next([...new Set(n)])}getLocaisComAgendamento(){return this.locaisComAgendamento.asObservable()}getAgendamentoByIdLocal(n){return this.agendamentos.filter(o=>o.local?.id===+n)}getLocalByID(n){return this.locais.find(o=>o.id===+n)}getLocaisDisponiveis(){return(0,M.of)(this.locais)}getLocais(){return[{id:1,descricao:"Bloco A - Sala 1",capacidade:10},{id:2,descricao:"Bloco B - Sala 2",capacidade:15},{id:3,descricao:"Bloco B - Sala 3",capacidade:25},{id:4,descricao:"Bloco A - Sala 4",capacidade:20},{id:5,descricao:"Bloco D - Audit\xf3rio",capacidade:12},{id:6,descricao:"Bloco C - Sala de confer\xeancia",capacidade:9}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=r(6895),l=r(4247),p=r(5593),m=r(805),Z=r(793),O=r(6422);function T(t,a){1&t&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"T\xedtulo"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Data"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Local"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Horario Inicio"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Horario Fim"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Cooperagem"),e.qZA()())}function y(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"date"),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"bool"),e.qZA()()),2&t){const n=a.$implicit;e.xp6(2),e.Oqu(n.titulo),e.xp6(2),e.Oqu(e.xi3(5,6,n.data,"dd/MM/yyyy")),e.xp6(3),e.Oqu(n.local.descricao),e.xp6(2),e.Oqu(e.xi3(10,9,n.horaInicio,"HH:mm")),e.xp6(3),e.Oqu(e.xi3(13,12,n.horaFim,"HH:mm")),e.xp6(3),e.Oqu(e.lcZ(16,15,n.isCooperagem))}}let P=(()=>{class t{constructor(n){this.service=n,this.id=0,this.listaAgendamentos=[]}ngOnInit(){this.listaAgendamentos=this.service.getAgendamentoByIdLocal(this.id)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["container-reunioes-agendadas"]],inputs:{id:"id"},decls:4,vars:1,consts:[[1,"container-table"],["styleClass","p-datatable-sm p-datatable-striped",3,"value"],["pTemplate","header"],["pTemplate","body"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"p-table",1),e.YNc(2,T,13,0,"ng-template",2),e.YNc(3,y,17,17,"ng-template",3),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("value",o.listaAgendamentos))},dependencies:[m.jx,Z.iA,c.uU,O.P],styles:[".container-table[_ngcontent-%COMP%]{padding:10px;width:100%;height:100%;display:flex;flex-direction:column}"]}),t})();function w(t,a){if(1&t&&(e.TgZ(0,"div",8)(1,"span"),e._uU(2),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.local.descricao)}}let R=(()=>{class t{constructor(n,o,i){this.service=n,this.route=o,this.location=i,this.idLocal=0}ngOnInit(){this.idLocal=this.route.snapshot.params.idLocal,this.local=this.service.getLocalByID(this.idLocal)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g),e.Y36(s.gz),e.Y36(c.Ye))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:9,vars:2,consts:[[1,"area-conteudo-pagina"],[1,"grid-detalhar-page"],[1,"container-header"],["class","titulo-local",4,"ngIf"],[1,"container-table-reunioes"],[3,"id"],[1,"container-area-botoes"],["pButton","","pRipple","","type","button","label","Voltar",3,"click"],[1,"titulo-local"]],template:function(n,o){1&n&&(e.TgZ(0,"p-card")(1,"div",0)(2,"div",1)(3,"div",2),e.YNc(4,w,3,1,"div",3),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"container-reunioes-agendadas",5),e.qZA(),e.TgZ(7,"div",6)(8,"button",7),e.NdJ("click",function(){return o.location.back()}),e.qZA()()()()()),2&n&&(e.xp6(4),e.Q6J("ngIf",o.local),e.xp6(2),e.Q6J("id",o.idLocal))},dependencies:[c.O5,l.Z,p.Hq,P],styles:['.grid-detalhar-page[_ngcontent-%COMP%]{height:100%;display:grid;grid-template-columns:100%;grid-template-rows:8% 84%;grid-template-areas:"hh" "tr" "ab"}.container-header[_ngcontent-%COMP%]{display:flex;align-items:center;grid-area:hh}.container-table-reunioes[_ngcontent-%COMP%]{grid-area:tr}.container-area-botoes[_ngcontent-%COMP%]{grid-area:ab}.titulo-local[_ngcontent-%COMP%]{font-size:18px;color:#fff}[_nghost-%COMP%]     .p-button{width:10%}']}),t})();var f=r(4325);class _{static fromJson(a,n){return n?Object.assign(new a,n):new a}static removeProperties(a,n){const o={...a};return n.forEach(i=>{delete o[i]}),o}static removeNullProperties(a){const n={...a};return Object.keys(n).forEach(o=>{n[o]?"object"==typeof n[o]&&null!==n[o]&&(n[o]=this.removeNullProperties(n[o])):delete n[o]}),n}}class b extends _{constructor(a,n,o,i,d,K,$,G,W){super(),this.id=a,this.titulo=n,this.data=o,this.local=i,this.horaInicio=d,this.horaFim=K,this.isCooperagem=$,this.quantidadePessoas=G,this.opcaoReuniao=W}}var u=(()=>{return(t=u||(u={})).LINK_REUNIAO="Link Reuni\xe3o",t.SUPORTE_TI="Suporte TI",t.NENHUM="Nenhum",u;var t})();class A extends _{constructor(a,n,o){super(),this.id=a,this.descOpcao=n,this.txtDetalhesReuniao=o}static getDescricaoOpcao(a){return{1:u.LINK_REUNIAO,2:u.SUPORTE_TI,3:u.NENHUM}[a]}}class q{constructor(){this.dataMin=new Date,this.values=b.fromJson(b,new b),this.values.opcaoReuniao=new A}setDescOpcao(a){this.values.opcaoReuniao.descOpcao=A.getDescricaoOpcao(a)}}var v=r(433),B=r(613),J=r(1989),L=r(2210),F=r(5047),N=r(585),I=r(3054),U=r(8166);function k(t,a){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"textarea",24),e.NdJ("ngModelChange",function(i){e.CHM(n);const d=e.oxw();return e.KtG(d.form.values.opcaoReuniao.txtDetalhesReuniao=i)}),e.qZA(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("rows",10)("ngModel",n.form.values.opcaoReuniao.txtDetalhesReuniao)("cols",64)}}let D=(()=>{class t{constructor(n,o){this.ref=n,this.parametros=o,this.locais=[],this.form=new q}ngOnInit(){this.locais=this.parametros.data.locais}salvar(){this.ref.close(this.form.values)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.E7),e.Y36(f.S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["component-agendamento"]],decls:40,vars:25,consts:[[1,"grid-form-agendamento"],[3,"ngModel","placeholder","ngModelChange"],[1,"p-input-filled"],["placeholder","Selecione a data","dateFormat","dd-mm-yy",3,"ngModel","minDate","showIcon","showButtonBar","showTransitionOptions","hideTransitionOptions","ngModelChange"],[1,"container-horarios"],[1,"drop","p-input-filled"],["icon","pi pi-clock",3,"ngModel","showIcon","timeOnly","hourFormat","ngModelChange"],[1,"local-qtd-pessoas"],[1,"field","p-input-filled"],["optionLabel","descricao","placeholder","Local",3,"options","ngModel","ngModelChange"],["placeholder","num. pessoas",3,"ngModel","ngModelChange"],[1,"borda"],[1,"container-opcoes-reuniao"],[1,"opcao"],["name","opReuniao","value","1",3,"ngModel","ngModelChange"],["name","opReuniao","value","2",3,"ngModel","ngModelChange"],["name","opReuniao","value","3",3,"ngModel","ngModelChange"],[4,"ngIf"],[1,"container-cooperagem"],[3,"ngModel","binary","ngModelChange"],[1,"txt-cooperagem"],[1,"botoes"],["pButton","","pRipple","","type","button","label","Cancelar","id","cancelar",3,"click"],["pButton","","pRipple","","type","button","label","Salvar",1,"primary",3,"click"],["placeholder","Informe aqui os dados da reuni\xe3o. Link, senha etc...","pInputTextarea","",3,"rows","ngModel","cols","ngModelChange"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"input-text-component",1),e.NdJ("ngModelChange",function(d){return o.form.values.titulo=d}),e.qZA(),e.TgZ(2,"div",2)(3,"p-calendar",3),e.NdJ("ngModelChange",function(d){return o.form.values.data=d}),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5)(6,"span"),e._uU(7,"Inicio"),e.qZA(),e.TgZ(8,"p-calendar",6),e.NdJ("ngModelChange",function(d){return o.form.values.horaInicio=d}),e.qZA()(),e.TgZ(9,"div",5)(10,"span"),e._uU(11,"Fim"),e.qZA(),e.TgZ(12,"p-calendar",6),e.NdJ("ngModelChange",function(d){return o.form.values.horaFim=d}),e.qZA()()(),e.TgZ(13,"div",7)(14,"div",8)(15,"p-dropdown",9),e.NdJ("ngModelChange",function(d){return o.form.values.local=d}),e.qZA()(),e.TgZ(16,"div",8)(17,"p-inputNumber",10),e.NdJ("ngModelChange",function(d){return o.form.values.quantidadePessoas=d}),e.qZA()()(),e.TgZ(18,"fieldset",11)(19,"div",12)(20,"div",13)(21,"p-radioButton",14),e.NdJ("ngModelChange",function(d){return o.form.values.opcaoReuniao.id=d})("ngModelChange",function(d){return o.form.setDescOpcao(d)}),e.qZA(),e.TgZ(22,"span"),e._uU(23,"Link Reuni\xe3o"),e.qZA()(),e.TgZ(24,"div",13)(25,"p-radioButton",15),e.NdJ("ngModelChange",function(d){return o.form.values.opcaoReuniao.id=d})("ngModelChange",function(d){return o.form.setDescOpcao(d)}),e.qZA(),e.TgZ(26,"span"),e._uU(27,"Suporte TI"),e.qZA()(),e.TgZ(28,"div",13)(29,"p-radioButton",16),e.NdJ("ngModelChange",function(d){return o.form.values.opcaoReuniao.id=d})("ngModelChange",function(d){return o.form.setDescOpcao(d)}),e.qZA(),e.TgZ(30,"span"),e._uU(31,"Nenhum"),e.qZA()()(),e.YNc(32,k,2,3,"ng-container",17),e.qZA(),e.TgZ(33,"div",18)(34,"p-checkbox",19),e.NdJ("ngModelChange",function(d){return o.form.values.isCooperagem=d}),e.qZA(),e.TgZ(35,"span",20),e._uU(36,"Deseja servi\xe7o de cooperagem ?"),e.qZA()(),e.TgZ(37,"div",21)(38,"button",22),e.NdJ("click",function(){return o.ref.close()}),e.qZA(),e.TgZ(39,"button",23),e.NdJ("click",function(){return o.salvar()}),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("ngModel",o.form.values.titulo)("placeholder","Titulo da reuni\xe3o"),e.xp6(2),e.Q6J("ngModel",o.form.values.data)("minDate",o.form.dataMin)("showIcon",!0)("showButtonBar",!0)("showTransitionOptions","150ms")("hideTransitionOptions","150ms"),e.xp6(5),e.Q6J("ngModel",o.form.values.horaInicio)("showIcon",!0)("timeOnly",!0)("hourFormat","24"),e.xp6(4),e.Q6J("ngModel",o.form.values.horaFim)("showIcon",!0)("timeOnly",!0)("hourFormat","24"),e.xp6(3),e.Q6J("options",o.locais)("ngModel",o.form.values.local),e.xp6(2),e.Q6J("ngModel",o.form.values.quantidadePessoas),e.xp6(4),e.Q6J("ngModel",o.form.values.opcaoReuniao.id),e.xp6(4),e.Q6J("ngModel",o.form.values.opcaoReuniao.id),e.xp6(4),e.Q6J("ngModel",o.form.values.opcaoReuniao.id),e.xp6(3),e.Q6J("ngIf",1==o.form.values.opcaoReuniao.id),e.xp6(2),e.Q6J("ngModel",o.form.values.isCooperagem)("binary",!0))},dependencies:[c.O5,v.Fj,v.JJ,v.On,B.EU,J.XZ,L.Lt,p.Hq,F.Rn,N.f,I.g,U.m],styles:[".grid-form-agendamento[_ngcontent-%COMP%]{display:grid;grid-template-columns:100%;row-gap:5%}.container-horarios[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container-horarios[_ngcontent-%COMP%]   .drop[_ngcontent-%COMP%]{width:48%}.container-cooperagem[_ngcontent-%COMP%]{padding:5px}.txt-cooperagem[_ngcontent-%COMP%]{margin-left:5px}.container-opcoes-reuniao[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;padding:5px 0}.container-opcoes-reuniao[_ngcontent-%COMP%]   .opcao[_ngcontent-%COMP%]{word-break:break-word;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.container-opcoes-reuniao[_ngcontent-%COMP%]   .opcao[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}.local-qtd-pessoas[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.local-qtd-pessoas[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{width:48%}.botoes[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:20px}.botoes[_ngcontent-%COMP%]     .p-button{width:48%}textarea[_ngcontent-%COMP%]{resize:vertical}.borda[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.3);border-radius:4px}#cancelar[_ngcontent-%COMP%]{background-color:#ffffff0f;border:1px solid rgba(255,255,255,.3);color:#fff}[_nghost-%COMP%]     .p-calendar{width:100%}[_nghost-%COMP%]     .p-calendar-w-btn .p-datepicker-trigger.p-button:enabled:hover{background-color:unset}[_nghost-%COMP%]     .p-datepicker{margin:unset;border-radius:10px;margin-top:2%}[_nghost-%COMP%]     .p-datepicker table td{padding:unset;margin:unset;font-size:14px}[_nghost-%COMP%]     .p-datepicker .p-datepicker-buttonbar{padding:unset}[_nghost-%COMP%]     .p-datepicker .p-datepicker-header{padding:unset}[_nghost-%COMP%]     .p-datepicker table td>span.p-highlight{color:#151515;background-color:#5068c5;color:#fff}[_nghost-%COMP%]     .p-checkbox .p-checkbox-box.p-highlight{border-color:#5068c5;background:#5068c5}  p-inputnumber input{width:285px!important}  .p-dropdown{width:100%!important}  .p-dialog{border:1px solid #40484f;border-radius:15px!important;box-shadow:unset;min-width:24%;min-height:72%}  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon{background-color:#5068c5}  .p-radiobutton .p-radiobutton-box.p-highlight{border-color:#5068c5}  .p-radiobutton .p-radiobutton-box.p-highlight:active{border-color:#5068c5}  .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover{border-color:#5068c5}  .p-dialog-header{border-top-left-radius:15px!important;border-top-right-radius:15px!important}  .p-dialog-content{border-bottom-left-radius:15px!important;border-bottom-right-radius:15px!important}  .p-dialog-content::-webkit-scrollbar{width:4px}  .p-dialog-content::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #add8e6;border-radius:5px;border:1px solid rgb(150,150,150)}  .p-dialog-content::-webkit-scrollbar-thumb{background:#5068c5;border-radius:5px}  .p-dropdown-items-wrapper::-webkit-scrollbar{width:4px}  .p-dropdown-items-wrapper::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #add8e6;border-radius:5px;border:1px solid rgb(150,150,150)}  .p-dropdown-items-wrapper::-webkit-scrollbar-thumb{background:#5068c5;border-radius:5px}"]}),t})(),S=(()=>{class t{constructor(n,o){this.dialogService=n,this.service=o}openModal(){this.service.getLocaisDisponiveis().subscribe(n=>{this.dialogService.open(D,{header:"Agendar Reuni\xe3o",data:{locais:n}}).onClose.subscribe(i=>{this.service.addAgendamento(i)})})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.xA),e.Y36(g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["container-header"]],features:[e._Bn([f.xA])],decls:6,vars:0,consts:[[1,"header"],[1,"titulo"],[1,"add-reuniao"],["pButton","","pRipple","","type","button","label","Adicionar",1,"p-button-raised","p-button-primary",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span"),e._uU(3,"Agendamento de Reuni\xe3o"),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e.NdJ("click",function(){return o.openModal()}),e.qZA()()())},dependencies:[p.Hq],styles:[".header[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid white}.header[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-size:28px}.header[_ngcontent-%COMP%]   .add-reuniao[_ngcontent-%COMP%]{display:flex}  .p-button{background-color:#5068c5;color:#fff}  .p-button:enabled:hover{background-color:#5068c5;color:#fff}  .p-button:enabled:focus{background-color:#5068c5;color:#fff}"]}),t})();var E=r(9751),H=r(9846);let Q=(()=>{class t{constructor(){this.local={},this.detalha=new e.vpe}detalhar(n){this.detalha.emit(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["component-card"]],inputs:{local:"local"},outputs:{detalha:"detalha"},decls:11,vars:4,consts:[[1,"container-card-reuniao"],[1,"conteudo"],[1,"area-titulo"],[1,"ellipsis"],[1,"area-informacoes"],[1,"area-acoes"],["pButton","","pRipple","","type","button","label","ver reuni\xf5es",1,"p-button-outlined","p-button-help",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4),e.qZA()(),e.TgZ(5,"div",4)(6,"span"),e._uU(7),e.ALo(8,"reuniao"),e.qZA()(),e.TgZ(9,"div",5)(10,"button",6),e.NdJ("click",function(){return o.detalhar(o.local.id)}),e.qZA()()()()),2&n&&(e.xp6(4),e.Oqu(o.local.descricao),e.xp6(3),e.Oqu(e.lcZ(8,2,o.local.qtdAgendamentos)))},dependencies:[p.Hq,H.P],styles:[".container-card-reuniao[_ngcontent-%COMP%]{width:100%;height:100%;border:1px solid #5068c5;border-radius:5px}.conteudo[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;flex-direction:column}.area-titulo[_ngcontent-%COMP%]{height:15%;display:flex;align-items:center;background-color:#5068c5}.area-titulo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px;font-size:20px;color:#fff}.area-informacoes[_ngcontent-%COMP%]{width:100%;height:70%;display:flex;justify-content:center;align-items:center}.area-informacoes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}.area-acoes[_ngcontent-%COMP%]{height:15%;display:flex;justify-content:flex-end;align-items:center;padding:15px 5px;margin-bottom:5px}.area-acoes[_ngcontent-%COMP%]     .p-button{padding:15px;height:100%}"]}),t})();function Y(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"component-card",3),e.NdJ("detalha",function(i){e.CHM(n);const d=e.oxw();return e.KtG(d.detalhar(i))}),e.qZA()}2&t&&e.Q6J("local",a.$implicit)}let j=(()=>{class t{constructor(n,o,i){this.service=n,this.route=o,this.router=i,this.locais=new E.y}ngOnInit(){this.locais=this.service.getLocaisComAgendamento()}detalhar(n){this.router.navigate([`../detalhar/${n}`],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g),e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["container-painel-cards"]],decls:4,vars:3,consts:[[1,"container-painel-cards"],[1,"grid-painel-cards"],[3,"local","detalha",4,"ngFor","ngForOf"],[3,"local","detalha"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Y,1,1,"component-card",2),e.ALo(3,"async"),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,1,o.locais)))},dependencies:[c.sg,Q,c.Ov],styles:[".container-painel-cards[_ngcontent-%COMP%]{padding:10px;width:100%;height:100%;display:flex;flex-direction:column}.grid-painel-cards[_ngcontent-%COMP%]{display:grid;height:100%;width:100%;grid-template-columns:repeat(3,32%);grid-auto-rows:30%;row-gap:1%;column-gap:1%;overflow-y:auto;overflow-x:hidden}@media only screen and (max-width: 900px){.grid-painel-cards[_ngcontent-%COMP%]{grid-template-columns:99%;padding-bottom:5px}}"]}),t})();const z=[{path:"list",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:7,vars:0,consts:[[1,"area-conteudo-pagina"],[1,"grid-list-page"],[1,"container-header"],[1,"container-painel-cards"]],template:function(n,o){1&n&&(e.TgZ(0,"p-card")(1,"div",0)(2,"div",1)(3,"div",2),e._UZ(4,"container-header"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"container-painel-cards"),e.qZA()()()())},dependencies:[l.Z,S,j],styles:['.grid-list-page[_ngcontent-%COMP%]{height:100%;display:grid;grid-template-columns:100%;grid-template-rows:8% 92%;grid-template-areas:"hh" "pc"}.container-header[_ngcontent-%COMP%]{grid-area:hh}.container-painel-cards[_ngcontent-%COMP%]{grid-area:pc}']}),t})()},{path:"detalhar/:idLocal",component:R}];let X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(z),s.Bz]}),t})()}}]);
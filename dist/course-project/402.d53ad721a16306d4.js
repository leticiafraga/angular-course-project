"use strict";(self.webpackChunkcourse_project=self.webpackChunkcourse_project||[]).push([[402],{1402:(D,g,c)=>{c.r(g),c.d(g,{RecipesModule:()=>k});var p=c(2537),r=c(4182),d=c(9808),e=c(2096),u=c(3649),m=c(8174);const Z=function(t){return[t]};let _=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:10,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",3,"routerLink"],[1,"row"],[1,"col-xs-8"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"col-xs-4","col-img"],["src","",1,"img-responsive",3,"src","alt"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0)(1,"div",1)(2,"div",2)(3,"h4",3),e._uU(4),e.qZA(),e.TgZ(5,"p",4),e._uU(6),e.qZA()(),e.TgZ(7,"div",5)(8,"div"),e._UZ(9,"img",6),e.qZA()()()()),2&i&&(e.Q6J("routerLink",e.VKq(5,Z,n.index)),e.xp6(4),e.Oqu(n.recipe.name),e.xp6(2),e.Oqu(n.recipe.description),e.xp6(3),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH))},directives:[p.yS,p.Od],styles:[".col-img[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:right}img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover}"]}),t})();function R(t,o){if(1&t&&e._UZ(0,"app-recipe-item",4),2&t){const n=o.index;e.Q6J("recipe",o.$implicit)("index",n)}}let C=(()=>{class t{constructor(i,n,s){this.rs=i,this.router=n,this.route=s}ngOnInit(){this.recipes=this.rs.getRecipes(),this.subscription=this.rs.recipesChanged.subscribe(i=>{this.recipes=i})}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.v),e.Y36(p.F0),e.Y36(p.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3," New recipe "),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,R,1,2,"app-recipe-item",3),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},directives:[d.sg,_],styles:[""]}),t})(),T=(()=>{class t{constructor(i){this.dss=i}ngOnInit(){this.dss.fetchRecipes().subscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},directives:[C,p.lC],styles:[""]}),t})();var A=c(2986),b=c(4850),w=c(5599);let x=(()=>{class t{constructor(i,n){this.auth=i,this.router=n}canActivate(i,n){return this.auth.user.pipe((0,A.q)(1),(0,b.U)(s=>!!s||this.router.createUrlTree(["/auth"])))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(w.e),e.LFG(p.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=c(1300);function F(t,o){if(1&t&&(e.TgZ(0,"li",11),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.xp6(1),e.AsE(" ",i.name," - ",i.amount," ")}}let I=(()=>{class t{constructor(i,n,s,a){this.rs=i,this.route=n,this.router=s,this.dss=a}ngOnInit(){this.route.params.subscribe(n=>{this.id=+n.id,this.recipeDetails=this.rs.getRecipe(this.id)})}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}sendToShoppingList(){this.rs.sendToShoppingList(this.recipeDetails.ingredients)}onDeleteRecipe(){this.rs.deleteRecipe(this.id),this.router.navigate(["../"],{relativeTo:this.route}),this.dss.storeRecipes()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.v),e.Y36(p.gz),e.Y36(p.F0),e.Y36(u.Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-detail"]],decls:34,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"col-xs-12","align-middle","col-img"],[1,"align-middle",3,"src","alt"],["appDropdown","",1,"btn-group"],[1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"h1"),e._uU(5),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",2),e._UZ(8,"img",3),e.qZA()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",4)(12,"button",5),e._uU(13,"Manage Recipe "),e.TgZ(14,"span",6)(15,"ul",7)(16,"li")(17,"a",8),e.NdJ("click",function(){return n.sendToShoppingList()}),e._uU(18,"To shopping list"),e.qZA()(),e.TgZ(19,"li")(20,"a",8),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(21,"Edit recipe"),e.qZA()(),e.TgZ(22,"li")(23,"a",8),e.NdJ("click",function(){return n.onDeleteRecipe()}),e._uU(24,"Delete recipe"),e.qZA()()()()()()()(),e.TgZ(25,"div",0)(26,"div",1)(27,"p"),e._uU(28),e.qZA()()(),e.TgZ(29,"div",0)(30,"div",1),e._uU(31," Ingredients "),e.TgZ(32,"ul",9),e.YNc(33,F,2,2,"li",10),e.qZA()()()),2&i&&(e.xp6(5),e.Oqu(n.recipeDetails.name),e.xp6(3),e.s9C("alt",n.recipeDetails.name),e.Q6J("src",n.recipeDetails.imagePath,e.LSH),e.xp6(20),e.Oqu(n.recipeDetails.description),e.xp6(5),e.Q6J("ngForOf",n.recipeDetails.ingredients))},directives:[y.w,d.sg],styles:["img[_ngcontent-%COMP%]{width:100%;height:400px;object-fit:cover;margin:15px 0}"]}),t})();function U(t,o){if(1&t&&e._UZ(0,"img",18),2&t){e.oxw();const i=e.MAs(21);e.Q6J("src",i.value,e.LSH)}}function q(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",19)(1,"div",20)(2,"div",0)(3,"div",21),e._UZ(4,"input",22),e.qZA(),e.TgZ(5,"div",23),e._UZ(6,"input",24),e.qZA(),e.TgZ(7,"div",23)(8,"button",4),e.NdJ("click",function(){const a=e.CHM(i).index;return e.oxw().onDeleteIngredient(a)}),e._uU(9,"X"),e.qZA()()()()()}if(2&t){const i=o.index;e.xp6(1),e.Q6J("formGroupName",i)}}let v=(()=>{class t{constructor(i,n,s,a){this.route=i,this.rs=n,this.router=s,this.dss=a,this.editMode=!1}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editMode=null!=i.id,this.initForm()})}initForm(){let i="",n="",s="",a=new r.Oe([]);if(this.editMode){const l=this.rs.getRecipe(this.id);if(i=l.name,n=l.description,s=l.imagePath,l.ingredients)for(let f of l.ingredients)a.push(new r.cw({name:new r.NI(f.name,r.kI.required),amount:new r.NI(f.amount,[r.kI.required,r.kI.pattern("^[1-9]+[0-9]*$")])}))}this.recipeForm=new r.cw({name:new r.NI(i,r.kI.required),imagePath:new r.NI(s,r.kI.required),description:new r.NI(n,r.kI.required),ingredients:a})}onSubmit(){const i=this.recipeForm.value;this.editMode?this.rs.updateRecipe(this.id,i):this.rs.addRecipe(i),this.router.navigate(["/recipes"]),this.dss.storeRecipes()}get controls(){return this.recipeForm.get("ingredients").controls}onAddIngredient(){this.recipeForm.get("ingredients").push(new r.cw({name:new r.NI(null),amount:new r.NI(null,[r.kI.required,r.kI.pattern("^[1-9]+[0-9]*$")])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngredient(i){console.log(this.recipeForm.get("ingredients")),this.recipeForm.get("ingredients").removeAt(i)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.gz),e.Y36(m.v),e.Y36(p.F0),e.Y36(u.Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:40,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"col-xs-12","img-preview"],["class","img-responsive","alt","",3,"src",4,"ngIf"],["for","description"],["type","text","id","description","rows","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","mt-3",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success","mt-3",3,"click"],["alt","",1,"img-responsive",3,"src"],[1,"mt-3"],[3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount","min","1",1,"form-control"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"button",3),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.onCancel()}),e._uU(8,"Cancel"),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA()()(),e.TgZ(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",9,10),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",11),e.YNc(24,U,1,1,"img",12),e.qZA()(),e.TgZ(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",13),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",14),e.qZA()()(),e.TgZ(31,"div",0)(32,"div",15)(33,"label"),e._uU(34,"Ingredients"),e.qZA(),e.YNc(35,q,10,1,"div",16),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",17),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(39,"Add ingredient"),e.qZA()()()()()()),2&i){const s=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("ngIf",s.value),e.xp6(11),e.Q6J("ngForOf",n.controls)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,d.O5,r.CE,d.sg,r.x0,r.wV,r.qQ],styles:[".mt-3[_ngcontent-%COMP%]{margin-top:.8rem}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.img-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover;margin:15px 0}"]}),t})(),h=(()=>{class t{constructor(i){this.dss=i}resolve(i,n){return this.dss.fetchRecipes()}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(u.Z))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const N=[{path:"",component:T,canActivate:[x],children:[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipes-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Choose a recipe!"),e.qZA())},styles:[""]}),t})()},{path:"new",component:v},{path:":id",component:I,resolve:[h]},{path:":id/edit",component:v,resolve:[h]}]}];let O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,p.Bz.forChild(N)],p.Bz]}),t})();var J=c(4466);let k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[J.m,p.Bz,r.UX,O]]}),t})()}}]);
// 单条卡片数据
interface appListSingle{
  categoryId:Number;
  code:String;
  companyId:String;
  createMemberId:String;
  createTime:String;
  description:String;
  enable:Number;
  icon:String;
  id:Number;
  initOrgAndMember:String|null;
  label:String;
  orderNum:Number;
  sgroup:String;
  type:Number;
  updateMemberId:String;
  updateTime:String;
  useFor:Number
}

// 应用分类
export interface cardListObj{
  appList:Array<appListSingle>;
  code:String;
  companyId:String;
  createMemberId:string;
  createTime:String;
  id:Number;
  init:Number;
  label:String;
  orderNum:Number;
  size:Number;
  updateMemberId:String;
  updateTime:String
}

export interface FromItemAttr{
  label:string,
  name:string,
  rules:Array<object>,
}
// 添加自定义应用fromitem配置
export interface FromItem{
  attr:FromItemAttr,
  type:any,
  componentBind:Object
}
// 添加自定义应用from数据
export interface FormState{
  appCode:string,
  appName:string,
  appIcon:string,
  appClass:string,
  appDescription:string,
  appGroup:string

}

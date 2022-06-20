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


/**
 * Created by chenjaijing
 * 日期： 2020/3/10.
 * 描述：接口管理类
 */

let HttpRoot = "";

class HttpUrl {
  constructor(params: { url: string }) {
    HttpRoot = params.url.replace(/\/$/gi, "");
  }
  /**
   * 消息
   */
  public static UrlChatsDownload = HttpRoot + "/chats/download"; //下载消息文件
  public static UrlChatsGroup = HttpRoot + "/chats/group"; //群消息发送
  public static UrlChatsPrivate = HttpRoot + "/chats/private"; //私聊发消息

  /**
   * 群
   */
  public static UrlGroupAdd = HttpRoot + "/group/add"; //群内主动添加好友
  public static UrlGroupAdmin = HttpRoot + "/group/admin"; //群管理
  public static UrlGroupAdoptInvite = HttpRoot + "/group/adopt-invite"; //通过好友群邀请
  public static UrlGroupCancelInvite = HttpRoot + "/group/cancel-invite"; //撤销邀请好友入群
  public static UrlGroupContacts = HttpRoot + "/group/contacts"; //获取保存至通讯录的群
  public static UrlGroupCreate = HttpRoot + "/group/create"; //创建群
  public static UrlGroupDelete = HttpRoot + "/group/delete"; //群内踢人
  public static UrlGroupLeave = HttpRoot + "/group/leave"; //主动退群
  public static UrlGroupList = HttpRoot + "/group/list"; //获取群列表
  public static UrlGroupName = HttpRoot + "/group/name"; //修改群名称
  public static UrlGroupNickname = HttpRoot + "/group/nickname"; //设置群内昵称
  public static UrlGroupNotice = HttpRoot + "/group/notice"; //群发布公告
  public static UrlGroupNoticeRead = HttpRoot + "/group/notice-read"; //获取群公告
  public static UrlGroupOpenVerify = HttpRoot + "/group/open-verify"; //查询群聊验证状态
  public static UrlGroupQrcode = HttpRoot + "/group/qrcode"; //获取群二维码
  public static UrlGroupSave = HttpRoot + "/group/save"; //保存群至通讯录
  public static UrlGroupScan = HttpRoot + "/group/scan"; //邀请好友入群
  public static UrlGroupTransfer = HttpRoot + "/group/transfer"; //转移群主
  public static UrlGroupUsers = HttpRoot + "/group/users"; //获取群成员信息列表
  public static UrlGroupVerify = HttpRoot + "/group/verify"; //开群群聊验证

  /**
   * 登录
   */
  public static UrlLogin = HttpRoot + "/login"; //登录
  public static UrlLogon = HttpRoot + "/logon"; //登出

  /**
   * 资料
   */
  public static UrlProfileAutoAdd = HttpRoot + "/profile/auto-add"; //设置是否自动通过联系人请求
  public static UrlProfileAutoJoin = HttpRoot + "/profile/auto-join"; //设置是否自动进入群聊
  public static UrlProfileAvatar = HttpRoot + "/profile/avatar"; //修改头像
  public static UrlProfileGender = HttpRoot + "/profile/gender"; //修改性别
  public static UrlProfileInfo = HttpRoot + "/profile/info"; //获取资料
  public static UrlProfileNickname = HttpRoot + "/profile/nickname"; //修改昵称
  public static UrlProfileWhatsUp = HttpRoot + "/profile/whats-up"; //修改个性签名

  /**
   * 关系链
   */
  public static UrlSnsAccept = HttpRoot + "/sns/accept"; //通过联系人请求
  public static UrlSnsAdd = HttpRoot + "/sns/add"; //添加联系人
  public static UrlSnsAutoRemark = HttpRoot + "/sns/auto-remark"; //设置联系人备注
  public static UrlSnsBlacklist = HttpRoot + "/sns/blacklist"; //设置联系人黑名单
  public static UrlSnsDelete = HttpRoot + "/sns/delete"; //删除联系人
  public static UrlSnsList = HttpRoot + "/sns/list"; //联系人列表

  /**
   * 标签
   */
  public static UrlTagAdd = HttpRoot + "/tag/add"; //标签下添加多个好友
  public static UrlTagCreate = HttpRoot + "/tag/create"; //创建标签
  public static UrlTagDelete = HttpRoot + "/tag/delete"; //删除标签
  public static UrlTagEdit = HttpRoot + "/tag/edit"; //编辑标签
  public static UrlTagFriends = HttpRoot + "/tag/friends"; //获取标签下好友列表
  public static UrlTagList = HttpRoot + "/tag/list"; //标签列表
  public static UrlTagRemove = HttpRoot + "/tag/remove"; //移除用户好友标签
  public static UrlTagSetup = HttpRoot + "/tag/setup"; //设置好友标签

  /**
   * 时间轴
   */
  public static UrlTimelineCover = HttpRoot + "/timeline/cover"; //更换时间轴相册封面
  public static UrlTimelineDelete = HttpRoot + "/timeline/delete"; //时间轴删除
  public static UrlTimelineLike = HttpRoot + "/timeline/like"; //时间轴点赞
  public static UrlTimelineList = HttpRoot + "/timeline/list"; //时间轴信息查询
  public static UrlTimelinePublic = HttpRoot + "/timeline/public"; //允许陌生人查看十条时间轴
  public static UrlTimelinePublish = HttpRoot + "/timeline/publish"; //发布时间轴
  public static UrlTimelineReply = HttpRoot + "/timeline/reply"; //时间轴评论
  public static UrlTimelineViewable = HttpRoot + "/timeline/viewable"; //设置允许朋友查看时间轴的范围

  // 重新设置地址
  public static resetUrl(rootUrl: string) {
    // 如果url以 / 结尾，则去掉
    HttpRoot = rootUrl.replace(/\/$/gi, "");

    /*
      消息
     */
    HttpUrl.UrlChatsDownload = HttpRoot + "/chats/download"; //下载消息文件
    HttpUrl.UrlChatsGroup = HttpRoot + "/chats/group"; //群消息发送
    HttpUrl.UrlChatsPrivate = HttpRoot + "/chats/private"; //私聊发消息

    /*
      群
     */
    HttpUrl.UrlGroupAdd = HttpRoot + "/group/add"; //群内主动添加好友
    HttpUrl.UrlGroupAdmin = HttpRoot + "/group/admin"; //群管理
    HttpUrl.UrlGroupAdoptInvite = HttpRoot + "/group/adopt-invite"; //通过好友群邀请
    HttpUrl.UrlGroupCancelInvite = HttpRoot + "/group/cancel-invite"; //撤销邀请好友入群
    HttpUrl.UrlGroupContacts = HttpRoot + "/group/contacts"; //获取保存至通讯录的群
    HttpUrl.UrlGroupCreate = HttpRoot + "/group/create"; //创建群
    HttpUrl.UrlGroupDelete = HttpRoot + "/group/delete"; //群内踢人
    HttpUrl.UrlGroupLeave = HttpRoot + "/group/leave"; //主动退群
    HttpUrl.UrlGroupList = HttpRoot + "/group/list"; //获取群列表
    HttpUrl.UrlGroupName = HttpRoot + "/group/name"; //修改群名称
    HttpUrl.UrlGroupNickname = HttpRoot + "/group/nickname"; //设置群内昵称
    HttpUrl.UrlGroupNotice = HttpRoot + "/group/notice"; //群发布公告
    HttpUrl.UrlGroupNoticeRead = HttpRoot + "/group/notice-read"; //获取群公告
    HttpUrl.UrlGroupOpenVerify = HttpRoot + "/group/open-verify"; //查询群聊验证状态
    HttpUrl.UrlGroupQrcode = HttpRoot + "/group/qrcode"; //获取群二维码
    HttpUrl.UrlGroupSave = HttpRoot + "/group/save"; //保存群至通讯录
    HttpUrl.UrlGroupScan = HttpRoot + "/group/scan"; //邀请好友入群
    HttpUrl.UrlGroupTransfer = HttpRoot + "/group/transfer"; //转移群主
    HttpUrl.UrlGroupUsers = HttpRoot + "/group/users"; //获取群成员信息列表
    HttpUrl.UrlGroupVerify = HttpRoot + "/group/verify"; //开群群聊验证

    /*
      登录
     */
    HttpUrl.UrlLogin = HttpRoot + "/login"; //登录
    HttpUrl.UrlLogon = HttpRoot + "/logon"; //登出

    /*
      资料
     */
    HttpUrl.UrlProfileAutoAdd = HttpRoot + "/profile/auto-add"; //设置是否自动通过联系人请求
    HttpUrl.UrlProfileAutoJoin = HttpRoot + "/profile/auto-join"; //设置是否自动进入群聊
    HttpUrl.UrlProfileAvatar = HttpRoot + "/profile/avatar"; //修改头像
    HttpUrl.UrlProfileGender = HttpRoot + "/profile/gender"; //修改性别
    HttpUrl.UrlProfileInfo = HttpRoot + "/profile/info"; //获取资料
    HttpUrl.UrlProfileNickname = HttpRoot + "/profile/nickname"; //修改昵称
    HttpUrl.UrlProfileWhatsUp = HttpRoot + "/profile/whats-up"; //修改个性签名

    /*
      关系链
     */
    HttpUrl.UrlSnsAccept = HttpRoot + "/sns/accept"; //通过联系人请求
    HttpUrl.UrlSnsAdd = HttpRoot + "/sns/add"; //添加联系人
    HttpUrl.UrlSnsAutoRemark = HttpRoot + "/sns/auto-remark"; //设置联系人备注
    HttpUrl.UrlSnsBlacklist = HttpRoot + "/sns/blacklist"; //设置联系人黑名单
    HttpUrl.UrlSnsDelete = HttpRoot + "/sns/delete"; //删除联系人
    HttpUrl.UrlSnsList = HttpRoot + "/sns/list"; //联系人列表

    /*
      标签
     */
    HttpUrl.UrlTagAdd = HttpRoot + "/tag/add"; //标签下添加多个好友
    HttpUrl.UrlTagCreate = HttpRoot + "/tag/create"; //创建标签
    HttpUrl.UrlTagDelete = HttpRoot + "/tag/delete"; //删除标签
    HttpUrl.UrlTagEdit = HttpRoot + "/tag/edit"; //编辑标签
    HttpUrl.UrlTagFriends = HttpRoot + "/tag/friends"; //获取标签下好友列表
    HttpUrl.UrlTagList = HttpRoot + "/tag/list"; //标签列表
    HttpUrl.UrlTagRemove = HttpRoot + "/tag/remove"; //移除用户好友标签
    HttpUrl.UrlTagSetup = HttpRoot + "/tag/setup"; //设置好友标签

    /*
      时间轴
     */
    HttpUrl.UrlTimelineCover = HttpRoot + "/timeline/cover"; //更换时间轴相册封面
    HttpUrl.UrlTimelineDelete = HttpRoot + "/timeline/delete"; //时间轴删除
    HttpUrl.UrlTimelineLike = HttpRoot + "/timeline/like"; //时间轴点赞
    HttpUrl.UrlTimelineList = HttpRoot + "/timeline/list"; //时间轴信息查询
    HttpUrl.UrlTimelinePublic = HttpRoot + "/timeline/public"; //允许陌生人查看十条时间轴
    HttpUrl.UrlTimelinePublish = HttpRoot + "/timeline/publish"; //发布时间轴
    HttpUrl.UrlTimelineReply = HttpRoot + "/timeline/reply"; //时间轴评论
    HttpUrl.UrlTimelineViewable = HttpRoot + "/timeline/viewable"; //设置允许朋友查看时间轴的范围
  }
}
export default HttpUrl;

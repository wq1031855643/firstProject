define(function () {
	// console.log("读取到了头部模块");
	function creatLogin(){
        var div = document.createElement('div')
        var str = '<div class="weixinBox"><div class="wechBox"><div class="erweima"><p>微信登录</p><img src="images/z_login/z_wxf.jpg" alt=""></div><div class="z_wec_html">                请使用微信二维码扫码登录</div></div></div><div class="z_Tips"><div class="z_TipsBox"><div class="z_tipTitle"><h3>提示</h3><div class="z_tipCon">该账号或密码错误，如有问题请联系客服</div></div><div class="z_bottm"><div class="z_btns"><span class="z_sure">知道了</span></div></div></div></div><div class="z_wrapall z_all_sign"><div class="z_wrap_login z_wrap_move"><div class="z_close">x</div><div class="z_login_left"><a href="index.html" target="_blank" class="z_logo"><img src="images/z_login/z_logo.png" alt=""><div><p>找工作</p><p>我要跟老板谈</p></div></a><ul><li><i class="z_icon"></i><span>沟通</span><span>在线职位沟通</span></li><li><i class="z_icon"></i><span>任性选</span><span>各大行业职业任你选</span></li></ul></div><div class="z_login_right"><h4 class="z_search_title">登录boss直聘</h4><div class="z_main"><div class="z_sign_tab"><span class="z_link_pass cur">密码登录</span><span class="z_link_sms">短信登录</span><span class="z_link_scan">扫码登录</span></div><form class="z_mainBox0"><div class="z_phone z_bor_phon"><i class="z_book"></i><span class="z_wrap_sele"><em class="z_select">+86</em><i class="z_icon_sele"></i></span><input type="text" class="z_inp_phone" placeholder="手机号" name="count"><div class="err_phone"></div><div class="z_openLi"></div></div><div class="z_phone z_bor_pass"><i class="z_pass_i"></i><input type="password" name="password" placeholder="密码" class="z_ipt_pass"><div class="z_pass_er">请填写密码</div></div><div class="z_phone  z_bg"><b>请按住滑块，拖动到最右边</b><span class="z_boxMove"><i class="iconfont icon-shuangyoujiantou-"></i></span><div class="boxFlage"></div></div><div class="z_form_btn"><div class="btn">登录</div></div><div class="z_weixin"><a href="#" class="z_link_wechat">微信登录</a><div class="z_right">                                没有账号<a href="#" class="z_link_sig">立即注册</a></div></div></form><form class="z_mainBox1"><div class="z_phone z_bor_phon"><i class="z_book"></i><span class="z_wrap_sele"><em class="z_select">+86</em><i class="z_icon_sele"></i></span><input type="text" class="z_inp_phone" placeholder="手机号" name="count"><div class="err_phone"></div><div class="z_openLi"></div></div><div class="z_phone  z_bg"><b>请按住滑块，拖动到最右边</b><span class="z_boxMove"><i class="iconfont icon-shuangyoujiantou-"></i></span><div class="boxFlage"></div></div><div class="z_phone z_inp_me"><i class="z_mess_i"></i><input type="text" class="z_inp_mess" placeholder="短信验证码" name="messCode"><div class="z_mess_btn">发送验证码</div><div class="z_err_msg">请输入短信验证码</div></div><div class="z_form_btn"><div class="btn">登录</div></div><div class="z_weixin"><a href="#" class="z_link_wechat">微信登录</a><div class="z_right">                                没有账号<a href="#" class="z_link_sig">立即注册</a></div></div></form><div class="z_qrcode-box z_mainBox2"><p><span>使用 BOSS直聘 APP 扫码登录</span><em>扫码帮助</em></p><div class="z_img"><img src="../project/images/z_login/z_wxf.jpg" alt=""></div><div class="z_bott">                            没有账号<a href="#" class="z_link_sig">立即注册</a></div><div class="z_qrc_right"></div><div class="sign-scan-help animation"><h4>扫码帮助</h4><ul class="scan-help-tab"><li class="active">我是BOSS</li><li>我是牛人</li></ul><div class="sub-title">我的&nbsp;&gt;&nbsp;登录网页版</div><ul class="scan-help-content"><li class="help-boss active"></li><li class="help-geek"></li></ul></div></div></div></div></div></div><div class="z_wrapall z_all_reg"><div class="z_wrap_login z_wrap_move"><div class="z_close">x</div><div class="z_login_left"><a href="index.html" target="_blank" class="z_logo"><img src="images/z_login/z_logo.png" alt=""><div><p>找工作</p><p>我要跟老板谈</p></div></a><ul><li><i class="z_icon"></i><span>沟通</span><span>在线职位沟通</span></li><li><i class="z_icon"></i><span>任性选</span><span>各大行业职业任你选</span></li></ul></div><div class="z_login_right"><h4 class="z_search_title">登录boss直聘</h4><div class="z_main"><div class="space"></div><form class="z_mainBox0"><div class="z_phone z_bor_phon"><i class="z_book"></i><span class="z_wrap_sele"><em class="z_select">+86</em><i class="z_icon_sele"></i></span><input type="text" class="z_inp_phone" placeholder="手机号" name="count"><div class="err_phone"></div><div class="z_openLi"></div></div><div class="z_phone  z_bg"><b>请按住滑块，拖动到最右边</b><span class="z_boxMove"><i class="iconfont icon-shuangyoujiantou-"></i></span><div class="boxFlage"></div></div><div class="z_phone z_inp_me"><i class="z_mess_i"></i><input type="text" class="z_inp_mess" placeholder="短信验证码" name="messCode"><div class="z_mess_btn">发送验证码</div><div class="z_err_msg">请输入短信验证码</div></div><div class="z_form_btn"><div class="btn">注册</div></div><div class="z_txt_tip"><input type="checkbox" name="agree-policy" class="agree-policy">                            我已同意<a href="https://www.zhipin.com/register/protocol/introduce" target="_blank"                                class="z_agree">用户协议及隐私政策</a><a href="#" class="z_link_reg">直接登录</a><div class="tip-error"></div></div></form><form  class="z_mainBox1"><div class="z_phone z_bor_phon"><i class="z_book"></i><span class="z_wrap_sele"><em class="z_select">+86</em><i class="z_icon_sele"></i></span><input type="text" class="z_inp_phone" placeholder="手机号" name="count"><div class="err_phone"></div><div class="z_openLi"></div></div><div class="z_phone  z_bg"><b>请按住滑块，拖动到最右边</b><span class="z_boxMove"><i class="iconfont icon-shuangyoujiantou-"></i></span><div class="boxFlage"></div></div><div class="z_phone z_inp_me"><i class="z_mess_i"></i><input type="text" class="z_inp_mess" placeholder="短信验证码" name="messCode"><div class="z_mess_btn">发送验证码</div><div class="z_err_msg">请输入短信验证码</div></div><div class="z_form_btn"><div class="btn">注册</div></div><div class="z_txt_tip"><input type="checkbox" name="agree-policy" class="agree-policy">                            我已同意<a href="https://www.zhipin.com/register/protocol/introduce" target="_blank"                                class="z_agree">用户协议及隐私政策</a><a href="#" class="z_link_reg">直接登录</a><div class="tip-error"></div></div></form><div class="z_switch sho"><div class="z_switch_tip">                            微信极速注册<i class="z_icon_triangle"></i></div></div></div><div class="z_inner_box"><h4>微信快速注册</h4><div class="z_img_box"><img src="../project/images/z_login/z_wxf.jpg" alt=""></div><p class="z_reg_tip">                                请用微信“扫一扫”扫描上方二维码<br>                                进入快捷注册</p><div class="z_txt_t">                                已有账号<a href="#" class="z_link_reg">立即登录</a></div><div class="z_switch ph"><div class="z_switch_tip">                                        手机号注册在这里<i class="z_icon_triangle"></i></div></div></div></div></div></div>'
        div.innerHTML+=str;
		document.body.appendChild(div) 
	}
	return {
	    creatLogin: creatLogin
	}
})
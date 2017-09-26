var atteRolu = {
    upload_img_ok: false,
    upload_img_src: null,
    login_uid: null, //uid 
    login_token: null, //token
    pic_id_front: null, //身份证正面
    pic_id_back: null, //身份证反面
    init: function () {
        //初始化
        this.login_uid = $.getUrlParam("login_uid");
        this.login_token = $.getUrlParam("login_token");
        this.conmitInput();
        this.phoneReg();
        this.uploadImg();
        this.allSubmitClick();
    },
    conmitInput: function () {
        $(".atte-form-box input").keyup(function () {

            if ($(this).val().length > 0) {
                $(this).addClass("actived");
                $(this).removeClass("erroed");
                $(this).css("color", "#333");

            } else {
                $(this).removeClass("actived");
                $(this).addClass("erroed");
                $(this).css("color", "#fe426f");
            }
        });

        $(".atte-form-box input").blur(function () {

            if ($(this).val().length > 0) {
                $(this).addClass("actived");
                $(this).removeClass("erroed");
                $(this).css("color", "#333");
            } else {
                $(this).removeClass("actived");
                $(this).addClass("erroed");
                $(this).css("color", "#fe426f");
            }
        });
        //图片是否上传

        $(".upload-submit-btn").click(function (e) {
            e.preventDefault();
            //判断两张图片是否都上传
            if (atteRolu.pic_id_front) {
                //正面上传
                if (atteRolu.pic_id_back) {
                    //都上传了
                    $(".form-nav").show();
                    $(".upload-img-nav").hide();
                    $(".atte-main-box").css("left", "0");
                } else {
                    showInfo("身份证国徽面没上传");
                }
            } else {
                showInfo("身份证正面没上传");
            }
        });


    },
    phoneReg: function () {
        //手机号验证
        var phone_reg = /^1[34578]\d{9}$/;
        $("#login_phone").blur(function () {
            var phone_val = $(this).val();
            if (!phone_reg.test(phone_val)) {
                //格式错误
                showInfo("手机号格式错误");
                $(this).removeClass("actived");
                $(this).addClass("erroed");

            } else {
                $(this).addClass("actived");
                $(this).removeClass("erroed");
            }
        });
        $("#login_phone").keyup(function () {
            var phone_val = $(this).val();
            if (phone_val.length >= 11) {
                if (!phone_reg.test(phone_val)) {
                    $(this).removeClass("actived");
                    $(this).addClass("erroed");
                } else {
                    $(this).addClass("actived");
                    $(this).removeClass("erroed");
                }

            }
        });

    },

    uploadImg: function () {
        //上传图片 显示图片
        $(".img-box-btn>input").change(function (e) {
            var imgPath = $(this).val();
            var ipt = $(this);
            if (imgPath == "") {
                showInfo('请选择上传图片!');
                //alert("请选择上传图片！");
                return;
            }
            //判断上传文件的后缀名
            var strExtension = imgPath.substr(imgPath.lastIndexOf('.') + 1);
            if (strExtension != 'jpg' && strExtension != 'gif' &&
                strExtension != 'png' && strExtension != 'bmp' && strExtension != 'JPG' && strExtension != 'PNG') {
                showInfo('请选择图片文件!');
                // alert("请选择图片文件");
                return;
            } else {
                for (var n = 0; n < this.files.length; n++) {
                    var fileObj = this.files[n];
                    var imgUrl = window.URL.createObjectURL(this.files[n]);
                    var form_2 = new FormData();

                    ipt.parent().siblings(".img-box").find("div").css("background", "url(" + imgUrl + ") no-repeat").css("background-size", "100% 100%").find("img").attr("src", imgUrl)
                    form_2.append("login_uid", 10116);
                    form_2.append("login_token", "daf89ec8cc");
                    form_2.append("file", fileObj);
                    fetch(server + "/file/upload", {
                        method: 'POST',
                        //headers: myHeaders,
                        mode: 'cors',
                        cache: 'default',
                        body: form_2
                    }).then((response) => response.json()).then(function (data) {
                        //console.log(data);
                        // atteRolu[ipt.attr("name")]=222;
                        //  console.log(atteRolu.pic_id_front);
                        if (data.code == 200) {

                            //添加图片 
                              ipt.parent().siblings(".img-box").find("div").css("background", "url(" + imgUrl + ") no-repeat").css("background-size", "100% 100%").find("img").attr("src", imgUrl)
                  
                            ipt.addClass("actived").removeClass("erroed");
                            atteRolu[ipt.attr("name")] = data.data.url;

                        } else {
                            ipt.addClass("erroed").removeClass("actived");
                            showInfo('当前网络不稳定,上传失败,请重新上传');
                        }

                    });

                }
            }

        });
    },
    imgSubmitClick: function () {
        // 上传图片提交
    },
    allSubmitClick: function () {
        //点击提交  判断是否都填写完成 
        $("#all_submit_btn").click(function (e) {  
            e.preventDefault();
            // 判断是否都填写完成 
           
            if($("input").length==$("input.actived").length){
                //都填了 fetch   跳转
                

                
            }else{
                //有没填 的 
                if($($("input.erroed")[0]).hasClass("not-upload-info")){
                    //图片没上传
                    showInfo( $($("input.erroed")[0]).parent().siblings(".img-box-txt").html()+"没上传");
                   
                }else{
                    //其他没填写
                     showInfo( $($("input.erroed")[0]).siblings("p").html()+"没填写");
                }
            }

        });

    }
}
$(function () {
    atteRolu.init();
});
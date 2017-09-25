// 表单验证 上传图片
function showInfo(text) {
    $("body").addClass("overflow-hidden");
    $(".info-text").html(text);
    $(".modal-info").show();

}
$(".info-sure").click(function (e) {
    e.preventDefault();
    $("body").removeClass("overflow-hidden");
    $(".modal-info").hide();
});

function openHref(url) {
    $(".info-sure-2").click(function (e) {
        e.preventDefault();
        window.location.href = url;
    });
}

var atteRolu = {
    upload_img_ok: false,
    upload_img_src: null,
    init: function () {
        //初始化
        this.conmitInput();
        this.phoneReg();
        this.uploadImg();
    },
    conmitInput:function () {  
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
            var ipt=$(this);
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
                 
                    ipt.parent().siblings(".img-box").find("div").css("background","url("+imgUrl+") no-repeat").css("background-size","100% 100%").find("img").attr("src",imgUrl)
                    form_2.append("img", fileObj);
                    /*
                    fetch("http://zushouyou.cn/Api/index/img", {
                        method: 'POST',
                        //headers: myHeaders,
                        mode: 'cors',
                        cache: 'default',
                        body: form_2
                    }).then((response) => response.json()).then(function (data) {
                        //console.log(data);
                        if (data.code == 200) {

                        } else {
                            showInfo('当前网络不稳定,上传失败,请重新上传');
                        }

                    });
                    */
                }
            }

        });
    },
    imgSubmitClick:function () {  
        // 上传图片提交
    },
    allSubmitClick:function () {  
        //点击提交

    
    }
}

atteRolu.init();
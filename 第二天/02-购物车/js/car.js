$(function () {
    //当全选框选中时，其他复选框也要选中
    $(".checkall").change(function () {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        }
        else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    //当复选框全选中时，全选框也要选中
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        }
        else {
            $(".checkall").prop("checked", false);
        }
        //给选中的商品添加底色
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
    //点击加号按钮时，商品数量增加
    $(".increment").click(function () {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        var m = $(this).parents(".p-num").siblings(".p-price").html();
        m = m.substr(1);
        //商品价格增加
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (n * m).toFixed(2));
        getsum();
    });
    //点击减号按钮时，商品数量减少
    $(".decrement").click(function () {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {//当数量为1时，不可再减
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var m = $(this).parents(".p-num").siblings(".p-price").html();
        m = m.substr(1);
        //商品价格减少
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (m * n).toFixed(2));
        getsum();
    })
    //当用户直接在数量框做修改时，价格也要做出修改
    $(".itxt").change(function(){
        var n=$(this).val();
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(n*p).toFixed(2));
        getsum();
    })
    //点击单个删除按钮时，整个商品删除
    $(".p-action a").click(function(){
        $(this).parents(".cart-item").remove();
        getsum();
    })
    //勾选商品后删除，判断复选框有没有被选中，删除选中的
    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getsum();
    })
    //清空全部商品
    $(".clear-all").click(function(){
        $(".cart-item-list").empty();
        getsum();
    })
    getsum();//调用函数
    //计算全部件数和商品总金额，然后上面操作每做一次就调用一次函数来重新计算
    function getsum(){
        var count=0;
        var money=0;
        $(".itxt").each(function(i,ele){
            count+=parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i,ele){
            money+=parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥"+money.toFixed(2));
    };
    $(".btn-area").click(function(){
        $(this).siblings(".lk").css("display",'block');
        $(this).siblings(".lk").animate({
            left:-300,
            top:-600,
        },500);
    })
})
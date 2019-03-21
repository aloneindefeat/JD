window.onload=function(){
    let tapp=document.querySelector(".tap");
    let shanxibox=document.querySelector(".shanxi-box");
    tapp.onmouseover=function(){
        shanxibox.style.display="block"
    }
    tapp.onmouseout=function(){
        shanxibox.style.display="none"
	}
	//秒杀旁边的轮播图
	let imgs1=document.querySelectorAll(".img-box .kill1");
	let dots1=document.querySelectorAll(".dotss .dott1");
		imgs1[0].style.left=0;
		dots1[0].classList.add("dot-active");
		let now1=0;
		let next1=0;
	setInterval(function(){
		next1++;
		if(next1===dots1.length){
			next1=0;
		}
		imgs1[now1].style.left=0;
		imgs1[next1].style.left="180px";
		animate(imgs1[now1],{left:-180},function(){
		dots1[now1].classList.remove("dot-active");
		});
		animate(imgs1[next1],{left:0},function(){
		   for(let i=0;i<dots1.length;i++){
				dots1[i].classList.remove("dot-active");
		   }
		dots1[next1].classList.add("dot-active");
		});
		now1=next1;
	},2000);
//选项卡
xiaohu(".big-box-left li",".listbox")
    function xiaohu(li,section){
        let li1 = document.querySelectorAll(li);
        let sectionm = document.querySelectorAll(section);
        for (let i = 0; i < li1.length; i++) {
            li1[i].onmouseover = function () {
                sectionm[i].style = "display:block";
            }
            li1[i].onmouseout = function () {
                sectionm[i].style = "display:none";
            }
        }
    }
    pdd(".huafei-header span",".huafei-box")
function pdd(spar,huafeibox){
        let li1 = document.querySelectorAll(spar);
        let sectionm = document.querySelectorAll(huafeibox);
        li1[0].style="color: #e01121;border-bottom-color: #e01121";
       
        // console.log(li1[0])
        sectionm[0].style="display:block";
        for (let i = 0; i < li1.length; i++) {
            li1[i].onmouseenter = function () {
                for(let j=0;j<li1.length;j++){
                    li1[j].style="";
                }
                for(let k=0;k<sectionm.length;k++){
                    sectionm[k].style = "display:none";
                }
                sectionm[i].style = "display:block";
                li1[i].style="color: #e01121;border-bottom-color: #e01121";
            }
        }
    }    

//轮播图
    mlxg(".banner .daming",".dot",".banner-left",".banner-right",".banner")
	function mlxg(img, dot, leftbtn, rightbtn, header, active = "active", times = 2000) {
		let imgs = document.querySelectorAll(img);
		let dots = document.querySelectorAll(dot);
		let lbn = document.querySelector(leftbtn);
		let rbn = document.querySelector(rightbtn);
		let pic = document.querySelector(header);
		let t = setInterval(fn, times);
		// 下标：0 1 2 3 4  0 1 2 3 4 0 1 2 3
		let num = 0;
		// 初始值
		imgs[0].style.opacity = 1;
		dots[0].classList.add(active);
		function fn() {
			num++;
			// 循环
			if (num === imgs.length) {
				num = 0;
			}
			// console.log(num);
			// 所有图片的opacity都变为0
			for (let i = 0; i < imgs.length; i++) {
				imgs[i].style.opacity = 0;
				dots[i].classList.remove(active);
			}
			imgs[num].style.opacity = 1;
			dots[num].classList.add(active);
		}

        for (let i = 0; i < dots.length; i++) { //
		        dots[i].onmouseenter = function () {
    			for (let m = 0; m < dots.length; m++) {
					dots[m].classList.remove(active);
                }
                for (let j = 0; j < imgs.length; j++) {
                    imgs[j].style.opacity = 0;
				}
				dots[i].classList.add(active);
                imgs[i].style.opacity = 1;
			}
		}

		//鼠标移入时轮播结束   停止自动轮播用clearinterval
		//鼠标移出时。轮播图继续轮播   seteinterval
		pic.onmouseover = function () {
			clearInterval(t);
		};
		pic.onmouseout = function () {
			t = setInterval(fn, times);
		}

		lbn.onclick = function () {
			num--;
			if (num == -1) {
				num = imgs.length - 1;
			}
			for (let i = 0; i < imgs.length; i++) {
				imgs[i].style.opacity = 0;
				dots[i].classList.remove(active);
			}
			imgs[num].style.opacity = 1;
			dots[num].classList.add(active);
		}
		rbn.onclick = function () {
			num++;
			if (num == imgs.length) {
				num = 0;
			}
			for (let i = 0; i < imgs.length; i++) { //遍历，让其余值的透明度都为0
				imgs[i].style.opacity = 0;
				dots[i].classList.remove(active);
			}
			imgs[num].style.opacity = 1;
			dots[num].classList.add(active);
		}

		// 窗口失去焦点 停止时间间隔函数
		window.onblur = function () {
			clearInterval(t);
		}
		// 窗口获取焦点。继续时间间隔函数
		window.onfocus = function () {
			t = setInterval(fn, times);
		}
    }
//平移轮播没有轮播点
translate(".yan-left",".yan-right",".baobao-box")
function translate(leftbtn, rightbtn, translatebox) {
    let lbtn = document.querySelector(leftbtn);
    let rbtn = document.querySelector(rightbtn);
    let ull = document.querySelector(translatebox);
    let widths = parseInt(getComputedStyle(ull, null).width) / 3;
    let num = 0;
    rbtn.onclick = function () {
        num++;
        if (num === 3) {
            num = 0;
        }
        let ggg = -widths * num;
        ull.style.transform = "translateX(" + ggg + "px)";
    }
    lbtn.onclick = function () {
        num--;
       
        if (num === -1) {
            num = 2;
        }
        let ggg = -widths * num;
        ull.style.transform = "translateX(" + ggg + "px)";
    }
}
//n个轮播图开始
function Tab_card(select1, select2) {
    let li = document.querySelectorAll(select1);
    let box = document.querySelectorAll(select2);
    // 鼠标移入select1，显示select2
    li[0].style="color:#e33333";
    box[0].style.display="block";
    li.forEach((val, index) => {
        val.onmouseover = () => {
            for(let i=0;i<li.length;i++){
                box[i].style.display = "none";
                li[i].style="color:#666";
            }
            box[index].style.display = "block";
            li[index].style="color:#e33333";
        };
        // val.onmouseout = () => {
        //     box[index].style.display = "none";
        //     li[index].style="color:#666";
        // };
    });
}
Tab_card(".leng-center-box",".longchen-bigbox")
function banshou(luosi,dotmao,active="active7"){
    let box=document.querySelector(luosi);
    let dot7=document.querySelectorAll(dotmao);
    dot7[0].classList.add(active);
    dot7[0].onmouseenter=function(){
        animate(box,{left:0});
        dot7[0].classList.add(active);
        dot7[1].classList.remove(active);
    }
    dot7[1].onmouseenter=function(){
        animate(box,{left:-350})
        dot7[1].classList.add(active);
        dot7[0].classList.remove(active);
    }
}
banshou(".lll1-box",".dot7");
function paihangbang(luosi,dotmao,active="active6"){
    let box=document.querySelector(luosi);
    let dot7=document.querySelectorAll(dotmao);
    dot7[0].classList.add(active);
    dot7[0].onmouseenter=function(){
        animate(box,{left:0});
        dot7[0].classList.add(active);
        dot7[1].classList.remove(active);
    }
    dot7[1].onmouseenter=function(){
        animate(box,{left:-390})
        dot7[1].classList.add(active);
        dot7[0].classList.remove(active);
    }
}
paihangbang(".longchen",".dot2");

// 双下标轮播图(左右平移）
// img:轮播图片
// dot:轮播点
// leftbtn:左箭头
// rightbtn:右箭头
// ban:轮播盒子
// active:轮播点选中效果类名
// time:自动轮播时间

function farker(img, dot, leftbtn, rightbtn, dot8s, active = "active8", time = 2000) {
    // 获取元素
    let imgs = document.querySelectorAll(img);
    let dots = document.querySelectorAll(dot);
    let lbtn = document.querySelector(leftbtn);
    let rbtn = document.querySelector(rightbtn);
    let dot8ss = document.querySelector(dot8s);
    // 获取轮播图的宽度
    let widths = 345;
    // 定义双下标,now:当前页面下标,next:下一张页面下标
    let now = 0;
    let next = 0;
    // 定义开关
    let flag = true;
    // 设置图片默认显示第一张
    imgs.forEach(val => {
        val.style.left = widths + "px";
    });
    imgs[0].style.left = 0;
    // 设置轮播点默认显示第一个
    dots[0].classList.add(active);
    // 自动轮播
    let t = setInterval(move, time);

    function move() {
        next = next === imgs.length - 1 ? 0 : ++next;
        imgs[now].style.left = 0;
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, () => {
            dots.forEach(val => {
                val.classList.remove(active);
            });
            dots[next].classList.add(active);
        });
        now = next;
    }

    // 点击轮播点，会出现对应的图片
    dots.forEach((val, index) => {
        val.onmouseenter = () => {
            dots.forEach((val, index) => {
                imgs[index].style.left = widths + "px";
                val.classList.remove(active);
            });
            imgs[index].style.left = 0;
            val.classList.add(active);
            now = next = index;
        };
    });
    // 点击左箭头，出现上一张
    lbtn.onclick = () => {
        if (!flag) {
            return;
        }
        flag = false;
        next = next === 0 ? imgs.length - 1 : --next;
        imgs[now].style.left = 0;
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0}, () => {
            dots.forEach(val => {
                val.classList.remove(active);
            });
            dots[next].classList.add(active);
            flag = true;
        });
        now = next;
    };
    // 点击右箭头，出现下一张
    rbtn.onclick = () => {
        if (!flag) {
            return;
        }
        flag = false;
        next = next === imgs.length - 1 ? 0 : ++next;
        imgs[now].style.left = 0;
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, () => {
            dots.forEach(val => {
                val.classList.remove(active);
            });
            dots[next].classList.add(active);
            flag = true;
        });
        now = next;
    };
    // 鼠标移入时停止轮播
    // banner1.onmouseenter = () => {
    //     clearInterval(t);
    // };
    // // 鼠标移出时继续轮播
    // banner.onmouseout = () => {
    //     t = setInterval(move, time);
    // };
    dot8ss.onmouseover=function(){
        clearInterval(t);
	}
	dot8ss.onmouseleave=function(){
        t=setInterval(move,time);
	}
    lbtn.onmouseenter=function(){
        clearInterval(t);
	}
	lbtn.onmouseleave=function(){
        t=setInterval(move,time);
	}
	rbtn.onmouseenter=function(){
        clearInterval(t);
	}
	rbtn.onmouseleave=function(){
        t=setInterval(move,time);
	}
	
    // 窗口失去焦点时停止轮播
    onblur = () => {
        clearInterval(t);
    };
    // 窗口获得焦点时继续轮播
    onfocus = () => {
        t = setInterval(move, time);
    };
}
farker(".zhui-center",".dot9",".zhui-left",".zhui-right",".zhui-dot9s")
farker(".zhui-center1",".dot8",".zhui-left1",".zhui-right1",".zhui-dot8s")

//特色推荐轮播
tesetuijian(".se-banner",".dot6",".se-left6",".se-right6",".se-banner-box1",".se-dot6s")
function tesetuijian(img, dot, leftbtn, rightbtn, ban,dot6s,active = "active10", time = 2000) {
    // 获取元素
    let imgs = document.querySelectorAll(img);
    let dots = document.querySelectorAll(dot);
    let lbtn = document.querySelector(leftbtn);
    let rbtn = document.querySelector(rightbtn);
    let banner = document.querySelector(ban);
    let dot6ss =document.querySelector(dot6s);
    // 获取轮播图的宽度
    let widths = 1190;
    // 定义双下标,now:当前页面下标,next:下一张页面下标
    let now = 0;
    let next = 0;
    // 定义开关
    let flag = true;
    // 设置图片默认显示第一张
    imgs.forEach(val => {
        val.style.left = widths + "px";
    });
    imgs[0].style.left = 0;
    // 设置轮播点默认显示第一个
    dots[0].classList.add(active);
    // 自动轮播
    let t = setInterval(move, time);

    function move() {
        next = next === imgs.length - 1 ? 0 : ++next;
        imgs[now].style.left = 0;
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, () => {
            dots.forEach(val => {
                val.classList.remove(active);
            });
            dots[next].classList.add(active);
        });
        now = next;
    }
    // yiru轮播点，会出现对应的图片
    dots.forEach((val, index) => {
        val.onclick = () => {
            dots.forEach((val, index) => {
                imgs[index].style.left = widths + "px";
                val.classList.remove(active);
            });
            imgs[index].style.left = 0;
            val.classList.add(active);
            now = next = index;
        };
    });
    // 点击左箭头，出现上一张
    lbtn.onclick = () => {
        if (!flag) {
            return;
        }
        flag = false;
        next = next === 0 ? imgs.length - 1 : --next;
        imgs[now].style.left = 0;
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0}, () => {
            dots.forEach(val => {
                val.classList.remove(active);
            });
            dots[next].classList.add(active);
            flag = true;
        });
        now = next;
    };
    // 点击右箭头，出现下一张
    rbtn.onclick = () => {
        if (!flag) {
            return;
        }
        flag = false;
        next = next === imgs.length - 1 ? 0 : ++next;
        imgs[now].style.left = 0;
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, () => {
            dots.forEach(val => {
                val.classList.remove(active);
            });
            dots[next].classList.add(active);
            flag = true;
        });
        now = next;
    };
    // 鼠标移入时停止轮播
    banner.onmouseover = () => {
        clearInterval(t);
    };
    // 鼠标移出时继续轮播
    banner.onmouseout = () => {
        t = setInterval(move, time);
    };
     // 鼠标移入时停止轮播
     lbtn.onmouseover = () => {
        clearInterval(t);
    };
    // 鼠标移出时继续轮播
    lbtn.onmouseout = () => {
        t = setInterval(move, time);
    };
     // 鼠标移入时停止轮播
     rbtn.onmouseover = () => {
        clearInterval(t);
    };
    // 鼠标移出时继续轮播
    rbtn.onmouseout = () => {
        t = setInterval(move, time);
    };
    dot6ss.onmouseover = () => {
        clearInterval(t);
    };
    // 鼠标移出时继续轮播
    dot6ss.onmouseout = () => {
        t = setInterval(move, time);
    };
    // 窗口失去焦点时停止轮播
    onblur = () => {
        clearInterval(t);
    };
    // 窗口获得焦点时继续轮播
    onfocus = () => {
        t = setInterval(move, time);
    };
}
}
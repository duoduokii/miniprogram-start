"use strict";
var app = getApp();
Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse("open-data.type.userAvatarUrl") && wx.canIUse("open-data.type.userNickName"),
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: "../logs/logs",
        });
    },
    onLoad: function () {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true,
            });
        }
    },
    getUserProfile: function () {
        var _this = this;
        wx.getUserProfile({
            desc: "展示用户信息",
            success: function (res) {
                console.log(res);
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            },
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CLElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQscUJBQXFCLEVBQUUsS0FBSztRQUM1QixlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7S0FDeEc7SUFFRCxXQUFXO1FBQ1YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxjQUFjO1NBQ25CLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBRUwsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1oscUJBQXFCLEVBQUUsSUFBSTthQUMzQixDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFDRCxjQUFjO1FBQWQsaUJBWUM7UUFWQSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQztZQUNKLENBQUM7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbi8vIFRPRE8gd2h5IGNhbiBpIHVzZSBDb25zdCBvciBsZXQgP1xudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdG1vdHRvOiBcIkhlbGxvIFdvcmxkXCIsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcblx0XHRjYW5JVXNlOiB3eC5jYW5JVXNlKFwiYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mb1wiKSxcblx0XHRjYW5JVXNlR2V0VXNlclByb2ZpbGU6IGZhbHNlLFxuXHRcdGNhbklVc2VPcGVuRGF0YTogd3guY2FuSVVzZShcIm9wZW4tZGF0YS50eXBlLnVzZXJBdmF0YXJVcmxcIikgJiYgd3guY2FuSVVzZShcIm9wZW4tZGF0YS50eXBlLnVzZXJOaWNrTmFtZVwiKSwgLy8g5aaC6ZyA5bCd6K+V6I635Y+W55So5oi35L+h5oGv5Y+v5pS55Li6ZmFsc2Vcblx0fSxcblx0Ly8g5LqL5Lu25aSE55CG5Ye95pWwXG5cdGJpbmRWaWV3VGFwKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiBcIi4uL2xvZ3MvbG9nc1wiLFxuXHRcdH0pO1xuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGlmICh3eC5nZXRVc2VyUHJvZmlsZSkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0Y2FuSVVzZUdldFVzZXJQcm9maWxlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRnZXRVc2VyUHJvZmlsZSgpIHtcblx0XHQvLyDmjqjojZDkvb/nlKh3eC5nZXRVc2VyUHJvZmlsZeiOt+WPlueUqOaIt+S/oeaBr++8jOW8gOWPkeiAheavj+asoemAmui/h+ivpeaOpeWPo+iOt+WPlueUqOaIt+S4quS6uuS/oeaBr+Wdh+mcgOeUqOaIt+ehruiupO+8jOW8gOWPkeiAheWmpeWWhOS/neeuoeeUqOaIt+W/q+mAn+Whq+WGmeeahOWktOWDj+aYteensO+8jOmBv+WFjemHjeWkjeW8ueeql1xuXHRcdHd4LmdldFVzZXJQcm9maWxlKHtcblx0XHRcdGRlc2M6IFwi5bGV56S655So5oi35L+h5oGvXCIsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXG5cdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fSxcblx0Z2V0VXNlckluZm8oZTogYW55KSB7XG5cdFx0Ly8g5LiN5o6o6I2Q5L2/55SoZ2V0VXNlckluZm/ojrflj5bnlKjmiLfkv6Hmga/vvIzpooTorqHoh6oyMDIx5bm0NOaciDEz5pel6LW377yMZ2V0VXNlckluZm/lsIbkuI3lho3lvLnlh7rlvLnnqpfvvIzlubbnm7TmjqXov5Tlm57ljL/lkI3nmoTnlKjmiLfkuKrkurrkv6Hmga9cblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0dXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuXHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0fSk7XG5cdH0sXG59KTtcbiJdfQ==
<ul class="courseUl">
    <li class="t-li">
        <div style=" padding-left: 22px;" class="left dv1">{{tDate}}</div>
        <div class="left dv2">{{tCotent}}</div>
        <div class="left dv3">{{tTeacher}}</div>
        <div class="clear"></div>
    </li>
    {{each list as value i}}
		<li>
            <div class="left dv1">
                <div class="custom-checkbox">
                    <div class="icheckbox" style="position: relative;"><input type="checkbox" class="icheck" value="checkCourse" id="a" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                    <label for="a" class="">&nbsp;{{value.date}}</label>
                </div>
            </div>
            <div class="left dv2">{{i}} || {{value.content}}</div>
            <div class="left dv3">{{value.teacher}}</div>
        </li>
    {{/each}}         
</ul>	

json.partial!('api/user/user', user: @user)
json.new_user @new_user if @new_user

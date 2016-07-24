json.array!(@users) do |user|
  json.partial!('api/user/user', user: user)
end

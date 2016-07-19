# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = [
	{
		"fname" => "Charmander",
		"fb_id" => 10154237301715856,
		"fb_access_token"  => "fake token",
		"url" => "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"
	}
]

# Create users and their user images
users.each do |user|
	created_user = User.create!(
		fname: user["fname"],
		fb_id: user["fb_id"],
		fb_access_token: user["fb_access_token"]
	)

	UserImage.create!(
		user_id: created_user.id,
		url: user["url"],
		order: 1,
		is_profile_image: true
	)
end

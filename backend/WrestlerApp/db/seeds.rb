# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Flush database
User.destroy_all
UserImage.destroy_all

# Create Data
users = [
	{
		"fname" => "Charmander",
		"fb_id" => 1,
		"fb_access_token"  => "fake token1",
		"url" => "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"
	},
	{
		"fname" => "Squirtle",
		"fb_id" => 2,
		"fb_access_token"  => "fake token2",
		"url" => "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"
	},
	{
		"fname" => "Bulbasaur",
		"fb_id" => 3,
		"fb_access_token"  => "fake token3",
		"url" => "http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"
	},
	{
		"fname" => "Pikachu",
		"fb_id" => 4,
		"fb_access_token"  => "fake token4",
		"url" => "http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"
	},
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

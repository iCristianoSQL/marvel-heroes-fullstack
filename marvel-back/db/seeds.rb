require 'json'

json_champions = File.read(Rails.root.join('db', 'champions.json'))
champions = JSON.parse(json_champions)

champions.each do |champion|
  begin
    Champion.create!(
      name: champion['name'],
      description: champion['description'],
      image: champion['image'],
      banner: champion['banner']
    )
    puts "Campeão #{champion['name']} adicionado com sucesso!"
  rescue ActiveRecord::RecordInvalid => e
    puts "#{champion['name']}: #{e.message}"
  end
end

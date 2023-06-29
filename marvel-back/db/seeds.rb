require 'json'

json_champions = File.read(Rails.root.join('db', 'champions.json'))
champions = JSON.parse(json_champions)

json_skills = File.read(Rails.root.join('db', 'skills.json'))
skills = JSON.parse(json_skills)

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

skills.each do |skill|
  begin
    Skill.create!(
      name: skill['name'],
      description: skill['description'],
      color: skill['color'],
    )
    puts "Habilidade #{skill['name']} adicionada com sucesso!"
  rescue ActiveRecord::RecordInvalid => e
    puts "#{skill['name']}: #{e.message}"
  end
end

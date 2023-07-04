class Champion < ApplicationRecord
  attr_accessor :skills_ids

  belongs_to :team, optional: true
  has_and_belongs_to_many :skills

  validates :name, presence: true, uniqueness: { message: "O campeão %{value} já existe" }, length: { maximum: 20 }
  validates :description, presence: { message: "A descrição não pode ficar em branco" }, length: { maximum: 2000, message: "A descrição deve ter no máximo %{count} caracteres" }
 
  before_save :replace_team_id_zero_with_null

  after_commit :attach_skills, on: :create, if: :saved_from_controller?

  def team_info
    { id: team_id, name: team&.name, description: team&.description }
  end

  def as_json(options = {})
    super(options).merge(team_info: team_info).except('team_id')
  end

  private

  def replace_team_id_zero_with_null
    self.team_id = nil if team_id == 0
  end

  def attach_skills
    skills_ids.each do |skill_id|
      skill = Skill.find(skill_id)
      self.skills << skill
    end
  end

  def saved_from_controller?
    persisted? && defined?(@saved_from_controller) && @saved_from_controller
  end
end

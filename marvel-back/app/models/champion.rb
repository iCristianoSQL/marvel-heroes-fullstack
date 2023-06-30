class Champion < ApplicationRecord
  attr_accessor :skills_ids

  belongs_to :team, optional: true
  has_and_belongs_to_many :skills

  validates :name, presence: true, uniqueness: { message: "O campeão %{value} já existe" }, length: { maximum: 20 }
  validates :description, presence: { message: "A descrição não pode ficar em branco" }, length: { maximum: 2000, message: "A descrição deve ter no máximo %{count} caracteres" }

  after_commit :attach_skills, on: :create, if: :saved_from_controller?

  private

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

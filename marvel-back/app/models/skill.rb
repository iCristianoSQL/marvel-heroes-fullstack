class Skill < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :description, presence: true, length: { maximum: 255 }
    validates :color, presence: true
end
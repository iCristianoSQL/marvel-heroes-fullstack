class Team < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :description, presence: true, length: { maximum: 255 }
    validates :shield, presence: true
end  
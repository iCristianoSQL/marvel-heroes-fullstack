class Champion < ApplicationRecord
  belongs_to :team, optional: true
  has_and_belongs_to_many :skills

  validates :name, presence: true, uniqueness: true, length: { maximum: 20 }
  validates :description, presence: true, length: { maximum: 2000 }
end
class SkillsController < ApplicationController
    before_action :set_skill, only: [:show, :edit, :update, :destroy]
  
    def index
      @skills = Skill.all
      render json: {
        message: "Habilidades carregadas com sucesso!",
        skills: @skills
      }
    end
  
    def show
      render json: {
        message: 'Habilidade carregada com sucesso!',
        skills: @skill
      }
    end
  
    def new
      @skill = Skill.new
      render json: @skill
    end
  
    def create
      @skill = Skill.new(skill_params)
  
      if @skill.save
        render json: @skill, status: :created
      else
        render json: @skill.errors, status: :unprocessable_entity
      end
    end
  
    def edit
      render json: @skill
    end
  
    def update
      if @skill.update(skill_params)
        render json: @skill
      else
        render json: @skill.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @skill.destroy
      head :no_content
    end
  
    private
  
    def set_skill
      @skill = Skill.find(params[:id])
    end
  
    def skill_params
      params.require(:skill).permit(:name, :description, :color)
    end
end  
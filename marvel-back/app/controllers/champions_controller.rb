class ChampionsController < ApplicationController
    before_action :set_champion, only: [:show, :update, :destroy]

    def index
        @champions = Champion.all
        render json: {
            message: "Campeões carregados com sucesso!",
            champions: @champions.as_json(include: :skills)
        }
    end
  
    def show
        render json: {
          message: "Campeão carregado com sucesso!",
          champion: @champion.as_json(include: :skills)
        }
    end
  
    def create
      @champion = Champion.new(champion_params)
      @champion.instance_variable_set(:@saved_from_controller, true)
      @champion.skills_ids = params[:skills]

      if @champion.save
        render json: @champion, status: :created
      else
        render json: @champion.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @champion.update(champion_params)
        render json: @champion
      else
        render json: @champion.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @champion.destroy
      head :no_content
    end
  
    private
  
    def set_champion
      @champion = Champion.find(params[:id])
    end
  
    def champion_params
      params.require(:champion).permit(
        :name,
        :description,
        :team_id,
        :image,
        :banner,
        skill_ids: []
      )
    end
end  
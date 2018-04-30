class ContactosController < ApplicationController
  before_action :set_contacto, only: [:show, :update, :destroy]
 
  # GET /contactos
  def index
    @contactos = Contacto.all

    render json: @contactos
  end

  # GET /contactos/1
  def show
    render json: @contacto
  end

  # POST /contactos
  def create
    @contacto = Contacto.new(contacto_params)

    if @contacto.save
      render json: @contacto, status: :created, location: @contacto
    else
      render json: @contacto.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /contactos/1
  def update
    if @contacto.update(contacto_params)
      render json: @contacto
    else
      render json: @contacto.errors, status: :unprocessable_entity
    end
  end

  # DELETE /contactos/1
  def destroy
    @contacto.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contacto
      @contacto = Contacto.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def contacto_params
      params.require(:contacto).permit(:clientes_id, :name, :lastname, :email, :phone_number, :job)
    end
end

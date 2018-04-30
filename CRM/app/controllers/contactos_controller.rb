class ContactosController < ApplicationController
  before_action :set_contacto, only: [:show, :update, :destroy]
 before_action :valide_User 
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
  
      id_cliente = contacto_params[:cliente_id]
      name = contacto_params[:name] 
      lastname=contacto_params[:lastname] 
      email=contacto_params[:email]
      phone_number=contacto_params[:phone_number]
      job=contacto_params[:job] 
      cliente= Cliente.where(id: id_cliente ).first
     if cliente
      contacto=Contacto.new(name: name, lastname: lastname, email: email, phone_number:phone_number, job: job)
      contacto.cliente=cliente
       if contacto.save
      render json: contacto, status: :created
    else
      render json: contacto.errors, status: :unprocessable_entity
    end
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
      params.require(:contacto).permit(:cliente_id, :name, :lastname, :email, :phone_number, :job)
    end
end

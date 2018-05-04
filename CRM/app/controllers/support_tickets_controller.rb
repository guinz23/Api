class SupportTicketsController < ApplicationController
  before_action :set_support_ticket, only: [:show, :update, :destroy]
  before_action :valide_User
  # GET /support_tickets
  def index
    @support_tickets = SupportTicket.all

    render json: @support_tickets
  end

  # GET /support_tickets/1
  def show
    render json: @support_ticket
  end

  # POST /support_tickets
  def create
  
    id_cliente = support_ticket_params[:cliente_id]
    title_of_the_problem = support_ticket_params[:title_of_the_problem] 
    details_of_the_problem=support_ticket_params[:details_of_the_problem] 
    who_reports=support_ticket_params[:who_reports]
    state=support_ticket_params[:state]
    cliente= Cliente.where(id: id_cliente ).first
   if cliente
    supportTicket=SupportTicket.new(title_of_the_problem: title_of_the_problem, details_of_the_problem: details_of_the_problem, who_reports: who_reports, state:state)
    supportTicket.cliente=cliente
     if supportTicket.save
    render json: supportTicket, status: :created
  else
    render json: supportTicket.errors, status: :unprocessable_entity
  end
end
end

  # PATCH/PUT /support_tickets/1
  def update
    if @support_ticket.update(support_ticket_params)
      render json: @support_ticket
    else
      render json: @support_ticket.errors, status: :unprocessable_entity
    end
  end

  # DELETE /support_tickets/1
  def destroy
    @support_ticket.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_support_ticket
      @support_ticket = SupportTicket.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def support_ticket_params
      params.require(:support_ticket).permit(:title_of_the_problem, :details_of_the_problem, :who_reports, :cliente_id, :state)
    end
end

class MeetingsController < ApplicationController
  before_action :set_meeting, only: [:show, :update, :destroy]

  # GET /meetings
  def index
    @meetings = Meeting.all

    render json: @meetings
  end

  # GET /meetings/1
  def show
    render json: @meeting
  end

  # POST /meetings
  def create
   
    title_of_meeting = meeting_params[:title_of_meeting]
    is_virtual = meeting_params[:is_virtual] 
    date=meeting_params[:date] 
    user_id=meeting_params[:user_id] 
    user= User.where(id: user_id ).first
   if user
    meeting=Meeting.new(title_of_meeting: title_of_meeting, date: date, user_id: user_id, is_virtual:is_virtual)
    meeting.user=user
     if meeting.save
    render json: meeting, status: :created
  else
    render json: meeting.errors, status: :unprocessable_entity
  end
end
end

  # PATCH/PUT /meetings/1
  def update
    if @meeting.update(meeting_params)
      render json: @meeting
    else
      render json: @meeting.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meetings/1
  def destroy
    @meeting.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meeting
      @meeting = Meeting.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def meeting_params
      params.require(:meeting).permit(:title_of_meeting, :date, :user_id, :is_virtual)
    end
end

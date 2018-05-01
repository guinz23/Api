require 'test_helper'

class SupportTicketsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @support_ticket = support_tickets(:one)
  end

  test "should get index" do
    get support_tickets_url, as: :json
    assert_response :success
  end

  test "should create support_ticket" do
    assert_difference('SupportTicket.count') do
      post support_tickets_url, params: { support_ticket: { clientes_id: @support_ticket.clientes_id, details_of_the_problem: @support_ticket.details_of_the_problem, state: @support_ticket.state, title_of_the_problem: @support_ticket.title_of_the_problem, who_reports: @support_ticket.who_reports } }, as: :json
    end

    assert_response 201
  end

  test "should show support_ticket" do
    get support_ticket_url(@support_ticket), as: :json
    assert_response :success
  end

  test "should update support_ticket" do
    patch support_ticket_url(@support_ticket), params: { support_ticket: { clientes_id: @support_ticket.clientes_id, details_of_the_problem: @support_ticket.details_of_the_problem, state: @support_ticket.state, title_of_the_problem: @support_ticket.title_of_the_problem, who_reports: @support_ticket.who_reports } }, as: :json
    assert_response 200
  end

  test "should destroy support_ticket" do
    assert_difference('SupportTicket.count', -1) do
      delete support_ticket_url(@support_ticket), as: :json
    end

    assert_response 204
  end
end

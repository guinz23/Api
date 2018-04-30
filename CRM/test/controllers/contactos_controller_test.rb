require 'test_helper'

class ContactosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contacto = contactos(:one)
  end

  test "should get index" do
    get contactos_url, as: :json
    assert_response :success
  end

  test "should create contacto" do
    assert_difference('Contacto.count') do
      post contactos_url, params: { contacto: { clientes_id: @contacto.clientes_id, email: @contacto.email, job: @contacto.job, lastname: @contacto.lastname, name: @contacto.name, phone_number: @contacto.phone_number } }, as: :json
    end

    assert_response 201
  end

  test "should show contacto" do
    get contacto_url(@contacto), as: :json
    assert_response :success
  end

  test "should update contacto" do
    patch contacto_url(@contacto), params: { contacto: { clientes_id: @contacto.clientes_id, email: @contacto.email, job: @contacto.job, lastname: @contacto.lastname, name: @contacto.name, phone_number: @contacto.phone_number } }, as: :json
    assert_response 200
  end

  test "should destroy contacto" do
    assert_difference('Contacto.count', -1) do
      delete contacto_url(@contacto), as: :json
    end

    assert_response 204
  end
end

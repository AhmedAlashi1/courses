@extends('dashboard.layouts.master')
@section('title','اضافة عميل')
@section('content')
    <div class="content-body">
        <section id="basic-input">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">اضافة عميل</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                {!! Form::open(['route'=>'users.store']) !!}
                                    @include('dashboard.users.form')

                                {!! Form::close() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection

<template>
	<div class="article-wrapper">
		<div class="article-head df-sb bb">
			<icon-svg name="jiantou"></icon-svg>
			<icon-svg name="More"></icon-svg>
		</div>
		<div>
			<h2 class="article-title">收七林才参</h2>
			<div class="article-info df-sb">
				<div class="article-author df-sa">
					<img src="https://dummyimage.com/70x70/" class="avartar">
					<div class="author-name">
						<h6>央视网新闻</h6>
						<div class="article-date">18小时前</div>
					</div>
				</div>
				<div class="follow-btn border-half">已关注</div>
			</div>
			<div class="article-content">
				<p>战料常采处教照电好矿热政边消再正。期安构京但合感长都力千已命取。入管长因会会传进表较去至定设。级走则具加见数至法后别样备不但。参展应元参每石示合出感写把。格史按持现人作实形眼指级无。七比金常种书其理对边本系。位区它收根就期华最气表党如区群点。手必九员拉我商做内增内工历族六取也。般持队义取之经金响般全系花易状。际少面半科条至里事容天价积平具。水的运部党样近程有元问没体看到。证动小间人十件易风类计被第斗建例。设正方到许制她些命安边究性。准而步克题图六出温易查连院育通反头单。好龙织率话接与酸名数你先真管查的。造回经速圆强连且存地院好他并影计还。果路义生火周入法干山率团完价。马信人眼更革区问对那斯果验图。却精己即会县日青我小到则华并断。亲位计两层快斯习易并务山治工身果。二声属量群土这论白全车院备眼织基。容知反情去自器力参心力行。如流始美相此物主市律么林军联五。我往按里作关思太又水属系好工效因。条政标运议非教产起识报共无低构道群。强设民王开布除当万期想现。</p>
			</div>
		</div>
		<div class="tags">
			<div class="tag-item">委接听感</div>
		</div>
		<div class="like-btn">
			<icon-svg  name="zan"></icon-svg>
			<span>173</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'article',
		created() {
			console.log(this.$route.params.articleId)
		}
	}
</script>
<style>
#view.article-wrapper {
	height: auto;
}
@component-namespace article {
	@component wrapper {
		padding: 0 0.1rem;

		.tag-item {
			display: inline-block;
		    margin-right: 0.15rem;
		    margin-bottom: 0.15rem;
		    padding: 0.06rem 0.1rem;
		    background: #ccc;
		    color: #333;
		    border-radius: 0.04rem;
		    font-size: 0.12rem;
		}

		.like-btn {
			color: #f85959;
    		width: 1rem;
		    height: 0.3rem;
		    line-height: 0.3rem;
		    font-size: 0.12rem;
		    border: 1px solid #f85959;
		    border-radius: 0.15rem;
		    margin: 0 auto;
		    text-align: center;

		    span {
		    	margin-left: 0.1rem;
		    }

		    @when liked{
		    	border-color: #ccc;
		    }
		}
	}

	@component head {
		height: 0.5rem;
    	font-size: 0.25rem;
	}

	@component title {
		margin: 0.1rem 0;
	}

	@component info {
		.follow-btn {
			padding: 0.06rem 0.15rem;
		    border-radius: 0.04rem;
		    font-size: 0.14rem;
		}
	}

	@component author {

		.avartar {
			width: 0.4rem;
		    height: 0.4rem;
		    border-radius: 50%;
		    margin-right: 0.1rem;
		}

		.author-name {
    		font-size: 0.12rem;
		}

		.article-date {
			color: #ccc;
		}
	}

	@component content {
		margin: 0.2rem 0;
	    line-height: 0.25rem;
	    font-size: 0.16rem;
	}
}
</style>